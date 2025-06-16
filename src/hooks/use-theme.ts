import { atom } from "jotai";

export const useThemeAtom = atom<"light" | "dark">("light");