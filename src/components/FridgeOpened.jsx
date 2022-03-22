import React from "react";

const FridgeOpened = () => {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center flex-column">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        class="bi bi-unlock"
        viewBox="0 0 16 16"
      >
        <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z" />
      </svg>
      <p className="fs-6 mt-3">Холодильник открыт</p>
    </div>
  );
};

export default FridgeOpened;
