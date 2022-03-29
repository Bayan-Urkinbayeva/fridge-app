import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import PurchaseComplated from "./PurchaseComplated";
import FirdgeBusy from "./FridgeBusy";
import PurchaseStart from "./PurchaseStart";
import LockTimer from "./LockTimer";
import Welcome from "./Welcome";

const ScanMe = () => {
  const [newSocket, setSocket] = useState(null);
  const [closed, setOpened] = useState(true);
  const [locked, setLocked] = useState(true);
  const [status, setStatus] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_SOCKET_URL);
    const token = localStorage.getItem("token");

    newSocket.on("connect", (socket) => {
      newSocket.emit("join", { clientId: token });
    });

    newSocket.on("closed", ({ state }) => {
      setOpened(state);
      setStatus(3);
    });

    newSocket.on("locked", ({ state }) => {
      setLocked(state);
      setSocket(2);
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
    setStatus(1);
  };

  return (
    <div className="h-100 py-20">
      <Navbar title={"Grab it 🍏"} />
      <p className="text-center absolute top-20 left-1/2 -translate-x-1/2">
        Холодильник: #{id}
      </p>
      {status == 0 ? (
        <Welcome onTap={openDoor} />
      ) : status == 1 ? (
        <LockTimer />
      ) : status == 2 ? (
        <PurchaseStart />
      ) : status == 3 ? (
        <PurchaseComplated />
      ) : status == 4 ? (
        <FirdgeBusy />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ScanMe;
