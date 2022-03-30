import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FridgeOpened from "../components/FridgeOpened";
import FridgeOpening from "../components/FrigeOpening";
import FridgeClosed from "../components/FridgeClosed";
import FridgeError from "../components/FridgeError";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

const ScanMe = () => {
  const [status, setStatus] = useState(0);
  const [sock, setSocket] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_SOCKET_URL);

    const token = localStorage.getItem("token");
    newSocket.on("connect", (socket) => {
      newSocket.emit("join", { clientId: token });
      newSocket.emit("open", { fridgeId: id, clientId: token });
    });
    newSocket.on("opened", () => {
      setStatus(1);
    });
    newSocket.on("closed", () => {
      setStatus(2);
    });
    newSocket.on("connect_error", () => {
      setStatus(3);
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="h-full">
      <Navbar title={"Сканирование"} />
      {status == 0 ? (
        <FridgeOpening />
      ) : status == 1 ? (
        <FridgeOpened />
      ) : status == 2 ? (
        <FridgeClosed />
      ) : (
        <FridgeError />
      )}
    </div>
  );
};

export default ScanMe;
