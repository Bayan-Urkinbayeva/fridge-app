import React from "react";

const PurchaseComplated = () => {
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
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <p className="text-center font-bold mb-2">Покупка завершена!</p>
      <button className="text-center text-sm px-4 py-2 font-medium bg-blue-500 text-white rounded">
        К покупкам
      </button>
    </div>
  );
};

export default PurchaseComplated;
