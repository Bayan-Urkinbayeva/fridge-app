import React from "react";

const FirdgeBusy = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-center font-bold mb-2">
        Кто-то совершает покупку ожидайте
      </p>
    </div>
  );
};

export default FirdgeBusy;
