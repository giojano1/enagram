import React from "react";
import LangBar from "./LangBar";
import { CirclePlus } from "lucide-react";

export default function HomePageHeader() {
  return (
    <div className="border-b border-[#EDEDED] pb-4 max-850:pt-6 flex items-center justify-between max-600:flex-col max-600:gap-3 ">
      <div className="flex items-center gap-6 max-600:flex-col max-600:gap-3 max-600:w-full">
        <LangBar />
        <div className="flex items-center gap-2.5 max-650:w-full">
          <input type="checkbox" className="w-5 h-5 " />
          <span className="text-[14px]">ფორმატის შენარჩუნება</span>
        </div>
      </div>
      <button className="bg-[#383a4896] rounded-[6px] flex items-center gap-2 h-[42px] text-white px-3 max-600:w-full justify-center">
        <CirclePlus width={18} />
        <span className="font-light text-[14px]">ახლის გახსნა</span>
      </button>
    </div>
  );
}
