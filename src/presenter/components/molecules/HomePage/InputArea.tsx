import React, { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "../../../../lib/utils";
import ConvertLoader from "./ConvertLoader";
export default function InputArea() {
  const [leftTextarea, setLeftTextarea] = useState("");
  const [rightTextarea, setRightTextarea] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isButtonEnabled =
    leftTextarea.trim() !== "" && rightTextarea.trim() !== "";

  const handleCompare = () => {
    if (isButtonEnabled) {
      console.log("Comparing texts:", leftTextarea, rightTextarea);
      setIsLoading(true);

      // Simulate a loading process
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <section className="my-6 ">
      <div className="relative">
        <div className={cn(`flex gap-10 relative`, isLoading && "opacity-0")}>
          <textarea
            value={leftTextarea}
            onChange={(e) => setLeftTextarea(e.target.value)}
            placeholder="დაიწყე წერა..."
            className=" resize-none bg-[#F0F7FF] w-1/2 h-[400px] rounded-lg p-4 "
          ></textarea>
          <MoveHorizontal
            width={32}
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
          />
          <textarea
            value={rightTextarea}
            onChange={(e) => setRightTextarea(e.target.value)}
            placeholder="დაიწყე წერა..."
            className=" resize-none bg-[#F0F7FF] w-1/2 h-[400px] rounded-lg p-4"
          ></textarea>
        </div>
        {isLoading && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ConvertLoader />
          </div>
        )}
      </div>
      <button
        onClick={handleCompare}
        disabled={!isButtonEnabled || isLoading}
        className={cn(
          `
            bg-[#383a4896] mx-auto mt-8 rounded-[6px] flex items-center  w-[142px] h-[48px] justify-center text-white disabled:cursor-not-allowed `,
          isButtonEnabled &&
            !isLoading &&
            "bg-[#2563EB] hover:bg-blue-700 cursor-pointer"
        )}
      >
        <span className="font-light text-[14px]">შედარება</span>
      </button>
    </section>
  );
}
