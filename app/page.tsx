"use client";

import dynamic from "next/dynamic";

const Chat = dynamic(() => import("./chat"), { ssr: false });
export default function Home() {
  return (
    <main
      style={{
        background: "linear-gradient(to right, #ffe4e1, #fff0f5)",
        minHeight: "100vh",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#d63384",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        💞 Welcome to LoveBot 💞
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          textAlign: "center",
          maxWidth: "600px",
          lineHeight: 1.6,
          marginBottom: "40px",
        }}
      >
        I'm your super cute, flirty, and charming{" "}
        <strong>Mufasa The Love Bot 💌✨</strong> — here to chat, flirt, and
        make your day a little sweeter 💕 Go ahead, ask me anything — I promise
        to be 99% dumb and 100% adorable and forever yours 😚
      </p>

      {/* 🎀 Static Image */}
      <img
        src="https://i0.wp.com/bubududuworld.com/wp-content/uploads/2024/10/Bubu-loving-Dudu.png?fit=1500%2C1500&ssl=1"
        alt="Bubu loving Dudu"
        style={{
          width: "300px",
          height: "auto",
          marginBottom: "32px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(214, 51, 132, 0.3)",
        }}
        loading="lazy"
      />

      <Chat />

      <footer
        style={{
          marginTop: "60px",
          fontSize: "1rem",
          color: "#c71585",
        }}
      >
        Made with 💖 by Your Lovely Zoo Zoo SunZoo
      </footer>
    </main>
  );
}
