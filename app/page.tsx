"use client";

import { useEffect, useRef } from "react";
import Chat from "./chat";

export default function Home() {
  const gifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    if (gifRef.current) {
      gifRef.current.appendChild(script);
    }
  }, []);

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
        <strong>Mufasa The Love Bot💌✨</strong> Here to chat, flirt, and make
        your day a little sweeter 💕 Go ahead, ask me anything — I promise to be
        99% dumb and 100% adorable and Forever Yours 😚
      </p>

      {/* 🎀 Tenor GIF Embed */}
      <div
        ref={gifRef}
        dangerouslySetInnerHTML={{
          __html: `
            <div class="tenor-gif-embed" 
              data-postid="4026913279718984993" 
              data-share-method="host" 
              data-aspect-ratio="1" 
              data-width="300px">
              <a href="https://tenor.com/view/dudu-bubu-dudu-love-dudu-heart-dudu-gif-4026913279718984993">
                Dudu Bubu Dudu Love Sticker
              </a> from 
              <a href="https://tenor.com/search/dudu+bubu-stickers">Dudu Bubu Stickers</a>
            </div>
          `,
        }}
        style={{ marginBottom: "32px" }}
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
