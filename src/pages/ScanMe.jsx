import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
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
    <div className="h-100">
      <Navbar title={"Холодильник"} />

      <div className="h-100 d-flex align-items-center justify-content-center flex-column">
        <div
          onClick={openDoor}
          className="d-flex flex-column align-items-center border border-3 px-3 py-5 rounded-3"
          style={{ cursor: "pointer" }}
        >
          <p>Дверь {closed ? "закрыта" : "открыта"}</p>
          <div
            style={{ width: 48, height: 48 }}
            className={`${
              locked ? "bg-danger" : "bg-primary"
            } rounded-3 d-flex align-items-center justify-content-center`}
          >
            {locked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: 24, height: 24 }}
                className="text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: 24, height: 24 }}
                className="text-white"
              >
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanMe;
