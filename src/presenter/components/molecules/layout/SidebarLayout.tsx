import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

export default function SidebarLayout() {
  return (
    <>
      <Header />
      <main className="h-dvh flex">
        <Sidebar />
        <section className="w-full flex-1">
          <Outlet />
        </section>
      </main>
    </>
  );
}
