import { useEffect, useRef, useState } from "react";
import {
  calcOffset,
  calcWidth,
  KEY_WIDTH,
  keyboardLayout,
} from "./KeyboardLayout";

export const Keyboard = ({ switchSound }: { switchSound: string }) => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  const audioCache = useRef<Record<string, HTMLAudioElement>>({});

  useEffect(() => {
    const sounds = ["gateronRed", "gateronTeal"];

    sounds.forEach((name) => {
      if (!audioCache.current[name]) {
        const audio = new Audio(`/Audio/${name}.mp3`);
        audio.preload = "auto";
        audioCache.current[name] = audio;
      }
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code != "F5" && e.code != "F12") e.preventDefault();

      if (audioCache.current[switchSound]) {
        const clone = audioCache.current[
          switchSound
        ].cloneNode() as HTMLAudioElement;
        clone.currentTime = 0;
        clone.play();
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
  }, [switchSound]);

  return (
    <div className="inline-flex flex-col gap-3 p-4 bg-teal-900 rounded-xl ml-2 shadow-2xl shadow-teal-900 text-2xl font-medium">
      {keyboardLayout.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex">
            {row.map((block, blockIndex) => {
              return (
                <div
                  key={blockIndex}
                  style={{
                    marginRight: block.offset
                      ? `${calcOffset(block.offset)}px`
                      : "",
                  }}
                  className="flex gap-2"
                >
                  {block.keys.map((key, keyIndex) => {
                    const isActive = pressedKeys.has(key.code);
                    return (
                      <div
                        key={keyIndex}
                        style={{
                          width: calcWidth(key.width),
                          height: KEY_WIDTH,
                        }}
                        className={
                          "flex justify-center items-center bg-[#a9a9a9] transition-all" +
                          `${isActive ? " scale-90" : ""}`
                        }
                      >
                        <div
                          style={{ width: calcWidth(key.width) - 20 }}
                          className="flex justify-center items-center h-[70px] bg-[#D9D9D9]"
                        >
                          {key.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
