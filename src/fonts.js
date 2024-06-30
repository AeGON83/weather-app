import { Lato, Open_Sans, Oswald, Poppins } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});
