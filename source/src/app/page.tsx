"use client";

import Image from "next/image";
import Wordle from "./wordle";
import MobileKeyboard from "./keyboard/MobileKeyboard";

export default function Home() {
  const handleKeyPress = (key: any) => {
    // Handle key presses as needed
    console.log(`Key pressed: ${key}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MobileKeyboard onKeyPress={handleKeyPress} />

      <Wordle />
    </main>
  );
}
