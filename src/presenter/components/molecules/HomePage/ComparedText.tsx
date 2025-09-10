import React from "react";
import { cn } from "../../../../lib/utils";

import { ComparisonItem } from "../../../../utils/compareTexts";

type ComparedTextProps = {
  comparison: ComparisonItem[];
  title: string;
};

export default function ComparedText({ comparison, title }: ComparedTextProps) {
  return (
    <div className="w-1/2 h-[400px] rounded-lg p-4 bg-white border border-gray-200 overflow-y-auto max-650:w-full max-600:h-[250px] max-650:text-[14px]  max-400:h-[200px]">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="text-sm leading-relaxed">
        {comparison.map((item, index) => (
          <span
            key={index}
            className={cn(
              item.type === "added" && "bg-green-200 text-green-800",
              item.type === "deleted" && "bg-red-200 text-red-800 line-through",
              item.type === "unchanged" && "text-gray-700"
            )}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
