import { createContext } from "react";

export const NavbarContext = createContext<{
  breakpoint?: "xl" | "lg" | "md" | "sm" | "xs";
}>({
  breakpoint: "md",
});
