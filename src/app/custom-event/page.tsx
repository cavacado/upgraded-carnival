"use client";
import React from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { DataLayer } from "../_components/DataLayer";
import { randomInt } from "../_utils/randomInt";

export default function CustomEvent() {
  const [fingerprint, setFingerPrint] = React.useState<number>(0);
  return (
    <>
      <h1>Showcasing custom event:</h1>
      <br />
      <button
        onClick={() => {
          setFingerPrint(randomInt());
          sendGAEvent("event", "custom_event", {
            value: "coolcoolcool",
          });
        }}
      >
        send custom event
      </button>
      <br />
      <DataLayer fingerprint={fingerprint} />
    </>
  );
}
