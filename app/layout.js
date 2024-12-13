import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollContext from "/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "JardinTerra",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`${poppins.variable}`}>
        <ScrollContext>{children}</ScrollContext>
      </body>
    </html>
  );
}