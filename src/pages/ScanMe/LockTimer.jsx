import React, { useEffect, useState } from "react";

const LockTimer = () => {
  const [progress, setPorgress] = useState(100);

  useEffect(() => {
    let interval = setInterval(() => {
      if (progress > 0) {
        setPorgress((progress) => progress - 3);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 mb-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
        />
      </svg>
      <div className="w-50 mb-2 p-1 h-4 flex items-center bg-slate-200 rounded-md relative">
        <span
          style={{ width: `${progress}%` }}
          className="h-2 rounded bg-blue-500"
        ></span>
      </div>
      <p className="text-center font-bold">Откройте дверь</p>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm">
        Холодильник разблокирован
      </p>
    </div>
  );
};

export default LockTimer;
