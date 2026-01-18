"use client";

import { useState } from "react";
import { HR_ADVICES } from "@/src/shared/data/hradvice.data";

export default function AdvicePage() {
  const [index, setIndex] = useState(0);

  const handleNextAdvice = () => {
    setIndex((prev) => (prev + 1) % HR_ADVICES.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl text-center border border-white/10 rounded-xl p-8 bg-black text-white">
        <h1 className="text-2xl font-bold mb-6">HR совет</h1>

        <p className="text-lg italic mb-6">{HR_ADVICES[index]}</p>

        <button
          onClick={handleNextAdvice}
          className="px-4 py-2 rounded-md border border-white/20 hover:bg-white/10 transition"
        >
          Следующий совет
        </button>
      </div>
    </div>
  );
}
