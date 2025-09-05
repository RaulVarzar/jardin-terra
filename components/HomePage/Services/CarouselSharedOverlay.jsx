import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { SERVICES } from "../../utils/data";
import Card from "./Card";
import ExpandedCardMobile from "./ExpandedCard/ExpandedCardMobile";

/**
 * SharedLayoutPreview
 * - Renders only the preview card that lives inside the draggable track.
 * - Calls onOpen(id) when the inner button is pressed.
 * - Important: this component does NOT render the expanded overlay.
 */
function SharedLayoutPreview({ id, layoutId, onOpen, children }) {
  return (
    <motion.div
      layoutId={layoutId}
      className=" flex-shrink-0" // widened card to make track longer
    >
      {typeof children === "function"
        ? children({ open: () => onOpen(id) })
        : children}
    </motion.div>
  );
}

/**
 * CarouselWithSharedOverlay
 * - Renders a draggable horizontal track with preview cards (SharedLayoutPreview).
 * - Renders the expanded overlay OUTSIDE the draggable track (as a sibling in the same component)
 * - Uses LayoutGroup around both the track and the overlay so Framer Motion can animate between
 *   the preview (inside track) and the overlay (fixed in viewport) using the same layoutId.
 */
export default function CarouselSharedOverlay() {
  const [activeId, setActiveId] = useState(null);
  const containerRef = useRef(null); // visible viewport for carousel
  const trackRef = useRef(null); // draggable track
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  // compute drag constraints dynamically so the carousel is usable on any screen
  useEffect(() => {
    function update() {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      const max = Math.max(track.scrollWidth - container.offsetWidth, 0);
      setConstraints({ left: -max, right: 0 });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActiveId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <LayoutGroup>
      <div className="relative ">
        {/* DRAGGABLE CAROUSEL (preview cards live here) */}
        <div
          ref={containerRef}
          className="overflow-hidden pl-[5vw] w-[95vw] max-w-[2400px] fade-horizontal"
        >
          <motion.div
            ref={trackRef}
            className="flex gap-4  sm:gap-8 md:gap-10 xl:gap-12 cursor-grab  max-sm:min-h-[600px] max-md:min-h-[60vh] 2xl:min-h-[70vh] active:cursor-grabbing p-4 w-full flex-row"
            drag="x"
            dragConstraints={constraints}
            dragTransition={{ bounceDamping: 60, bounceStiffness: 300 }}
          >
            {SERVICES.map((card) => (
              <SharedLayoutPreview
                key={card.id}
                id={card.id}
                layoutId={`card-${card.id}`}
                onOpen={setActiveId}
              >
                {({ open }) => <Card item={card} onClick={() => open()} />}
              </SharedLayoutPreview>
            ))}
          </motion.div>
        </div>

        {/* EXPANDED OVERLAY: rendered outside of the draggable track but inside the same LayoutGroup */}
        <AnimatePresence>
          {activeId && (
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[9999] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                onClick={() => setActiveId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
              />

              {/* expanded content uses the same layoutId as the preview */}
              <motion.div
                layoutId={`card-${activeId}`}
                className="relative z-[999]"
              >
                {/* Expanded card content */}
                {(() => {
                  const card = SERVICES.find((c) => c.id === activeId);
                  return (
                    <ExpandedCardMobile
                      item={card}
                      onClick={() => setActiveId(null)}
                    />
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}
