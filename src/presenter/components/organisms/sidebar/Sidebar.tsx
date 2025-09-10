import { ChevronsLeft } from "lucide-react";
import React from "react";
import Navbar from "./Navbar";
import UserBar from "./UserBar";

export default function Sidebar() {
  return (
    <section className="w-[240px] h-dvh bg-[#132450] max-850:hidden sticky left-0 top-0">
      <div className="flex justify-end px-6 text-[#ffffff58] py-3">
        <ChevronsLeft width={20} />
      </div>

      <div className="flex items-center gap-2 px-6">
        <img src="/assets/img/logo.png" className="w-11 h-11" />
        <span className="text-white text-[12px]">ENAGRAM</span>
      </div>
      {/* navbar */}
      <div className="flex flex-col justify-between   navbarHeight">
        <Navbar />
        <UserBar />
      </div>
    </section>
  );
}
