import { useEffect, useRef, useState } from "react";
import { calcOffset, calcWidth, keyboardLayout } from "./KeyboardLayout";

export const Keyboard = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/Audio/GateronRed.mp3");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code != "F5" && e.code != "F12") e.preventDefault();

      if (audioRef.current) {
        const sound = audioRef.current.cloneNode() as HTMLAudioElement;
        sound.currentTime = 0;
        sound.play();
      }

      setPressedKeys((prev) => new Set(prev).add(e.code));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code != "F5" && e.code != "F12") e.preventDefault();

      setPressedKeys((prev) => {
        const updated = new Set(prev);
        updated.delete(e.code);
        return updated;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="inline-flex flex-col gap-2 p-4 bg-teal-900 rounded-xl ml-2 shadow-2xl shadow-teal-900">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-center">
          {row.map((key, keyIndex) => {
            const isActive = pressedKeys.has(key.code);

            return (
              <div
                key={keyIndex}
                style={{
                  width: calcWidth(key.width),
                  marginRight: key.offset ? calcOffset(key.offset) : "8px",
                }}
                className={`flex items-center justify-center h-[90px] select-none transition-all key 
                  ${isActive ? "scale-90" : ""}
                `}
              >
                {key.label}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
