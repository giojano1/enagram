import { Menu } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <header className="h-[60px] bg-[#132450]  items-center justify-between px-[30px] hidden max-850:flex">
      <div className="flex items-center gap-2 ">
        <img src="/assets/img/logo.png" className="w-8 h-8" />
        <span className="text-white text-[11px]">ENAGRAM</span>
      </div>
      <Menu className="text-white" />
    </header>
  );
}
