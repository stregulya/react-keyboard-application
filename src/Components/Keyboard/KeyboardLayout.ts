// ---------- Константы ----------
const KEY_WIDTH = 90; // ширина обычной клавиши
const GAP = 8; // промежуток между клавишами

// ---------- Типы ----------
export type KeyConfig = {
  label: string;
  code: string;
  width?: number; // сколько "юнитов" занимает
  offset?: number; // отступ справа в "юнитах"
};

// ---------- Раскладка ----------
export const keyboardLayout: KeyConfig[][] = [
  [
    { label: "Esc", code: "Escape", offset: 1 },
    { label: "F1", code: "F1" },
    { label: "F2", code: "F2" },
    { label: "F3", code: "F3" },
    { label: "F4", code: "F4", offset: 0.5 },
    { label: "F5", code: "F5" },
    { label: "F6", code: "F6" },
    { label: "F7", code: "F7" },
    { label: "F8", code: "F8", offset: 0.5 },
    { label: "F9", code: "F9" },
    { label: "F10", code: "F10" },
    { label: "F11", code: "F11" },
    { label: "F12", code: "F12" },
  ],
  [
    { label: "`", code: "Backquote" },
    { label: "1", code: "Digit1" },
    { label: "2", code: "Digit2" },
    { label: "3", code: "Digit3" },
    { label: "4", code: "Digit4" },
    { label: "5", code: "Digit5" },
    { label: "6", code: "Digit6" },
    { label: "7", code: "Digit7" },
    { label: "8", code: "Digit8" },
    { label: "9", code: "Digit9" },
    { label: "0", code: "Digit0" },
    { label: "-", code: "Minus" },
    { label: "=", code: "Equal" },
    { label: "Backspace", code: "Backspace", width: 2 },
  ],
  [
    { label: "Tab", code: "Tab", width: 1.5 },
    { label: "Q", code: "KeyQ" },
    { label: "W", code: "KeyW" },
    { label: "E", code: "KeyE" },
    { label: "R", code: "KeyR" },
    { label: "T", code: "KeyT" },
    { label: "Y", code: "KeyY" },
    { label: "U", code: "KeyU" },
    { label: "I", code: "KeyI" },
    { label: "O", code: "KeyO" },
    { label: "P", code: "KeyP" },
    { label: "[", code: "BracketLeft" },
    { label: "]", code: "BracketRight" },
    { label: "\\", code: "Backslash", width: 1.5 },
  ],
  [
    { label: "Caps Lock", code: "CapsLock", width: 1.7 },
    { label: "A", code: "KeyA" },
  ],
];

export const calcWidth = (units = 1) => units * KEY_WIDTH + (units - 1) * GAP;
export const calcOffset = (units = 0) => units * KEY_WIDTH + units * GAP * 2;
