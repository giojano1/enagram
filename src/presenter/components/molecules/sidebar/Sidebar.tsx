import { ChevronsLeft } from "lucide-react";
import React from "react";
import Navbar from "./Navbar";

export default function Sidebar() {
  return (
    <section className="w-[240px] h-full bg-[#132450]">
      <div className="flex justify-end px-6 text-[#ffffff58] py-3">
        <ChevronsLeft width={20} />
      </div>
      <div className="flex items-center gap-2 px-6">
        <img src="/assets/img/logo.png" className="w-11 h-11" />
        <span className="text-white text-[12px]">ENAGRAM</span>
      </div>

      {/* navbar */}
      <div>
        <Navbar />
      </div>
    </section>
  );
}
