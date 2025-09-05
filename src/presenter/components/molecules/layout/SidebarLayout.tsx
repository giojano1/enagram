import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

export default function SidebarLayout() {
  return (
    <>
      <main className="h-dvh flex">
        <Sidebar />
        <section className="w-full flex-1">
          <Outlet />
        </section>
      </main>
    </>
  );
}
