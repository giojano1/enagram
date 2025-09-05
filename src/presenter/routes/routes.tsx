import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import SidebarLayout from "../components/organisms/layout/SidebarLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
