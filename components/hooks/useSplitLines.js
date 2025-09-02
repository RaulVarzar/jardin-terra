import { useEffect, useRef, useState } from "react";

export function useSplitLines(text) {
  const ref = useRef(null);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (!ref.current) return;

    // Get computed font size
    const fontSizeStr = window.getComputedStyle(ref.current).fontSize;
    const fontSize = parseFloat(fontSizeStr) || 16; // fallback to 16px

    // Get all text nodes
    const node = ref.current;
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null);
    let textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    // Create a Range for each character and group by line
    let rects = [];
    textNodes.forEach((textNode) => {
      for (let i = 0; i < textNode.length; i++) {
        const range = document.createRange();
        range.setStart(textNode, i);
        range.setEnd(textNode, i + 1);
        const rect = range.getBoundingClientRect();
        rects.push({ top: rect.top, text: textNode.data[i] });
        range.detach();
      }
    });

    // Group by line using fontSize as threshold
    const linesArr = [];
    let currentTop = null;
    let currentLine = "";
    rects.forEach(({ top, text }) => {
      if (currentTop === null) currentTop = top;
      if (Math.abs(top - currentTop) > fontSize * 0.7) {
        linesArr.push(currentLine);
        currentLine = text;
        currentTop = top;
      } else {
        currentLine += text;
      }
    });
    if (currentLine) linesArr.push(currentLine);

    setLines(linesArr);
  }, [text]);

  return [lines, ref];
}
