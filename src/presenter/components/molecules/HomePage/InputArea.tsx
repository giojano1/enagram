import React, { useState } from "react";
import { MoveHorizontal } from "lucide-react";

import ConvertLoader from "./ConvertLoader";
import ComparedText from "./ComparedText";
import { compareTexts, ComparisonItem } from "../../../../utils/compareTexts";
import { cn } from "../../../../lib/utils";

export default function InputArea() {
  const [leftTextarea, setLeftTextarea] = useState<string>("");
  const [rightTextarea, setRightTextarea] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [comparisonData, setComparisonData] = useState<ComparisonItem[] | null>(
    null
  );

  const isButtonEnabled =
    leftTextarea.trim() !== "" && rightTextarea.trim() !== "";

  const handleCompare = () => {
    if (!isButtonEnabled) return;

    setIsLoading(true);
    setShowComparison(false);

    setTimeout(() => {
      const comparison = compareTexts(leftTextarea, rightTextarea);
      setComparisonData(comparison);
      setIsLoading(false);
      setShowComparison(true);
    }, 3000);
  };

  const handleNewComparison = () => {
    setShowComparison(false);
    setComparisonData(null);
  };

  return (
    <section className="my-6">
      <div className="relative">
        {!showComparison && (
          <div
            className={cn(
              `flex gap-10 relative max-600:flex-col max-600:items-center`,
              isLoading && "opacity-0"
            )}
          >
            <textarea
              value={leftTextarea}
              onChange={(e) => setLeftTextarea(e.target.value)}
              placeholder="დაიწყე წერა..."
              className="resize-none bg-[#F0F7FF] w-1/2 h-[400px] rounded-lg p-4 max-650:w-full max-600:h-[250px] max-650:text-[14px]  max-400:h-[200px]"
              disabled={isLoading}
            />
            <MoveHorizontal
              width={32}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 max-600:rotate-90"
            />
            <textarea
              value={rightTextarea}
              onChange={(e) => setRightTextarea(e.target.value)}
              placeholder="დაიწყე წერა..."
              className="resize-none bg-[#F0F7FF] w-1/2 h-[400px] rounded-lg p-4 max-650:w-full max-600:h-[250px]  max-650:text-[14px] max-400:h-[200px]"
              disabled={isLoading}
            />
          </div>
        )}

        {showComparison && comparisonData && (
          <div className="flex gap-10 relative max-600:flex-col max-600:items-center">
            <div className="w-1/2 h-[400px] rounded-lg p-4 bg-white border border-gray-200 overflow-y-auto max-650:w-full max-600:h-[250px] max-650:text-[14px]  max-400:h-[200px]">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                თავდაპირველი ტექსტი
              </h3>
              <div className="text-sm leading-relaxed text-gray-700 whitespace-pre-wrap ">
                {leftTextarea}
              </div>
            </div>
            <MoveHorizontal
              width={32}
              className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 max-600:rotate-90"
            />
            <ComparedText
              comparison={comparisonData}
              title="შედარებული ტექსტი"
            />
          </div>
        )}

        {isLoading && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ConvertLoader />
          </div>
        )}
      </div>

      <div className="flex gap-4 justify-center mt-8">
        {!showComparison ? (
          <button
            onClick={handleCompare}
            disabled={!isButtonEnabled || isLoading}
            className={cn(
              "bg-[#383a4896] rounded-[6px] flex items-center w-[142px] h-[48px] justify-center text-white disabled:cursor-not-allowed",
              isButtonEnabled &&
                !isLoading &&
                "bg-[#2563EB] hover:bg-blue-700 cursor-pointer"
            )}
          >
            <span className="font-light text-[14px]">შედარება</span>
          </button>
        ) : (
          <button
            onClick={handleNewComparison}
            className="bg-[#2563EB] hover:bg-blue-700 rounded-[6px] flex items-center w-[142px] h-[48px] justify-center text-white cursor-pointer"
          >
            <span className="font-light text-[14px]">ახალი</span>
          </button>
        )}
      </div>
    </section>
  );
}
