import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ListScene, DetailScene } from "@/scenes";
import { switchRoutes } from "./routes";
import { HomeScene } from "@/scenes/home.scene";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />} />
      </Routes>
    </Router>
  );
};
