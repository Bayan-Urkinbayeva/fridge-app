import React from "react";

const Welcome = ({ onTap }) => {
  return (
    <div
      onClick={onTap}
      className="h-full flex flex-col items-center justify-center cursor-pointer"
    >
      <div className="w-8 h-8 relative mb-2">
        <span class="animate-ping -top-1 left-2 absolute inline-flex h-2.5 w-2.5 rounded-full bg-sky-500"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="absolute w-8 h-8 text-gray-700 z-10"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z" />
        </svg>
      </div>
      <p>Нажмите чтобы разблокировать</p>
    </div>
  );
};

export default Welcome;
