import { createContext } from "react";

export const NavbarContext = createContext<{
  hideOnMobileClassName?: string;
}>({
  hideOnMobileClassName: "",
});
