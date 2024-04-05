"use client";
import { sendGAEvent } from "@next/third-parties/google";
export default function CustomEvent() {
  return (
    <>
      <h1>Showcasing custom event:</h1>
      <br />
      <button
        onClick={() => {
          sendGAEvent("event", "custom_event", {
            value: "coolcoolcool",
          });
        }}
      >
        send custom event
      </button>
      <br />
      {window.dataLayer && <pre>{JSON.stringify(window.dataLayer)}</pre>}
    </>
  );
}
