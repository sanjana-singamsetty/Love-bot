"use client";

import { useState } from "react";
import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from "@botpress/webchat";
import { FaHeart } from "react-icons/fa"; // for romantic button icon

const clientId = "8ec64fc0-70a2-41f4-b8e2-684b7df2e4dd";

const configuration: Configuration = {
  color: "#FFB6C1", // soft baby pink
};

export default function App() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        bottom: 0,
        right: 0,
        alignItems: "flex-end",
        gap: "12px",
        padding: "24px",
        zIndex: 9999,
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
      }}
    >
      <WebchatProvider client={client} configuration={configuration}>
        <div
          style={{
            marginBottom: "80px",
            width: "360px",
            maxHeight: "520px",
            overflow: "hidden",
            borderRadius: "24px",
            backgroundColor: "#fff0f5",
            boxShadow: "0 12px 30px rgba(255, 182, 193, 0.6)",
            transform: isWebchatOpen ? "scale(1)" : "scale(0)",
            transformOrigin: "bottom right",
            transition: "transform 0.4s ease-in-out",
            border: "3px dashed #ff69b4",
            padding: "8px",
          }}
        >
          <Webchat />
        </div>

        <Fab
          onClick={toggleWebchat}
          style={{
            position: "absolute",
            bottom: "24px",
            right: "24px",
            backgroundColor: "#ff69b4",
            color: "#fff",
            boxShadow: "0 6px 16px rgba(255, 105, 180, 0.5)",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            fontSize: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
        >
          <FaHeart />
        </Fab>
      </WebchatProvider>
    </div>
  );
}
