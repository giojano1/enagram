import { Baseline } from "lucide-react";
import React from "react";

export default function ActivePage() {
  return (
    <div className="hidden max-850:flex items-center gap-2 border-b border-[#EDEDED] pb-6">
      <Baseline className="text-[#132450]" width={22} />
      <span className="font-bold text-[#132450] ">ტექსტის შედარება</span>
    </div>
  );
}
