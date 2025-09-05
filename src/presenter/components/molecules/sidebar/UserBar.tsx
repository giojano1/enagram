import { Ellipsis } from "lucide-react";
import React from "react";

export default function UserBar() {
  return (
    <div className="border-t border-[#9ebaff20] h-[60px] flex items-center px-3.5 justify-between  ">
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-[#9ec8ff] flex items-center justify-center text-[11px] font-bold ">
          გ
        </div>
        <span className="text-white font-light text-[14px]">
          გიორგი ჯანელიძე
        </span>
      </div>
      <Ellipsis width={18} className="text-white" />
    </div>
  );
}
