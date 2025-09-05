import { CircleDot } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ConvertLoader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const duration = 2000;
  useEffect(() => {
    const startTime = Date.now();

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const newProgress = Math.min((elapsedTime / duration) * 100, 100);

      setProgress(newProgress);

      if (newProgress >= 100) {
        setIsComplete(true);

        if (onComplete) {
          setTimeout(() => onComplete(), 500);
        }
      }
    };

    const interval = setInterval(updateProgress, 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);
  return (
    <div className=" w-fit border border-[#e1e1e1] rounded-lg p-4 flex items-center gap-2 ">
      <CircleDot width={40} height={40} className="text-[#4571E4]" />
      <div>
        <span className="text-[#383a4896] text-[10px]">
          Converting...Thank you For your Patience
        </span>
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#383A48] w-[50px] block ">
            {Math.round(progress)}%
          </span>
          <div className="w-[160px] h-2 rounded-full bg-[#F6F9FF]">
            <div
              className="h-2 rounded-full bg-[#4571e4] "
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
