"use client";

import { useEffect, useState } from "react";

const lines = [
  "> Connecting to workspace...",
  "> Loading agents [████████████████] 100%",
  "> Welcome to Octo.",
];

export default function LoadingPortal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleLines(1), 0),
      setTimeout(() => setVisibleLines(2), 800),
      setTimeout(() => setVisibleLines(3), 1600),
      setTimeout(() => setFading(true), 2500),
      setTimeout(() => setHidden(true), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-start bg-black p-8 transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div className="font-mono space-y-2">
        {lines.slice(0, visibleLines).map((line, i) => (
          <p key={i} className="text-[#00FF88] text-sm md:text-base">
            {line}
            {i === visibleLines - 1 && (
              <span className="animate-blink ml-0.5">▊</span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
