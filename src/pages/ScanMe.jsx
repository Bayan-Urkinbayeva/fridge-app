import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

const ScanMe = () => {
  const [newSocket, setSocket] = useState(null);
  const [closed, setOpened] = useState(true);
  const [locked, setLocked] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_SOCKET_URL);
    const token = localStorage.getItem("token");

    newSocket.on("connect", (socket) => {
      newSocket.emit("join", { clientId: token });
    });

    newSocket.on("closed", ({ state }) => {
      setOpened(state);
    });

    newSocket.on("locked", ({ state }) => {
      setLocked(state);
    });

    newSocket.on("info", ({ msg }) => {
      alert(msg);
      newSocket.disconnect();
    });

    newSocket.on("connect_error", () => {
      alert("Ой что-то пошло не так!");
    });

    setSocket(newSocket);
  }, [setSocket]);

  const openDoor = () => {
    console.log("Open send");
    const token = localStorage.getItem("token");
    newSocket.emit("direct", { receiver: id, sender: token, signal: "open" });
  };

  return (
    <div className="h-100 py-20" onClick={openDoor}>
      <Navbar title={"Grab it 🍏"} />
      {/* <div className="h-full flex flex-col items-center justify-center cursor-pointer">
        <p className="text-center absolute top-20">Холодильник: #{id}</p>
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
      </div> */}
      {/* <div className="h-full flex flex-col items-center justify-center">
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
          <span className="w-25 h-2 rounded bg-blue-500"></span>
        </div>
        <p className="text-center font-bold">Откройте дверь</p>
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm">
          Холодильник разблокирован
        </p>
      </div> */}
      {/* <div className="h-full flex flex-col items-center justify-center">
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
        <p className="text-center font-bold">Возьмите нужные товары</p>
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm">
          Для завершения покупки закройте дверцу
        </p>
      </div> */}
      {/* <div className="h-full flex flex-col items-center justify-center">
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
      </div> */}
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
    </div>
  );
};

export default ScanMe;
