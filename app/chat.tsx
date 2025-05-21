"use client";

import { useState } from "react";
import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from "@botpress/webchat";
import { FaHeart } from "react-icons/fa";

const clientId = "8ec64fc0-70a2-41f4-b8e2-684b7df2e4dd";

const configuration: Configuration = {
  color: "#FF69B4", // Hot pink for romantic feel
};

export default function App() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prev) => !prev);
  };

  return (
    <div>
      <WebchatProvider client={client} configuration={configuration}>
        {/* Floating Chat Button */}
        <Fab
          onClick={toggleWebchat}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            backgroundColor: "#ff69b4", // hot pink
            color: "#fff",
            boxShadow: "0 6px 16px rgba(255, 105, 180, 0.6)",
            border: "none",
            borderRadius: "50%",
            width: 64,
            height: 64,
            fontSize: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "transform 0.2s",
            zIndex: 9999,
          }}
          aria-label={isWebchatOpen ? "Close chat" : "Open chat"}
        >
          <FaHeart />
        </Fab>

        {/* Chat window */}
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 24,
            width: 360,
            maxHeight: 520,
            borderRadius: 24,
            backgroundColor: "#fff0f5", // lavender blush
            boxShadow: "0 12px 30px rgba(255, 105, 180, 0.3)",
            border: "3px dashed #ff69b4",
            overflow: "auto",
            transition: "transform 0.4s ease, opacity 0.4s ease",
            transform: isWebchatOpen ? "translateY(0)" : "translateY(20px)",
            opacity: isWebchatOpen ? 1 : 0,
            pointerEvents: isWebchatOpen ? "auto" : "none",
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
            zIndex: 9998,
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}
