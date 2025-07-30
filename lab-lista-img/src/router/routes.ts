import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  cats: string;
  dogs: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  cats: "/cats",
  dogs: "/dogs",
};
