import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { switchRoutes } from "./routes";
import { AppLayout } from "@/layout";
import { CartScene, ListCatsScene, ListDogScene } from "@/scenes";
import { ListModeProvider } from "@/core/providers/listMode";

export const AppRouter = () => {
  return (
    <Router>
      <ListModeProvider>
        <AppLayout Cart={<CartScene />}>
          <Routes>
            <Route
              path={switchRoutes.root}
              element={<Navigate to={switchRoutes.cats} />}
            />
            <Route path={switchRoutes.cats} element={<ListCatsScene />} />
            <Route path={switchRoutes.dogs} element={<ListDogScene />} />
          </Routes>
        </AppLayout>
      </ListModeProvider>
    </Router>
  );
};
