import { atom } from "nanostores";

export const file = atom<string | null>(null);

export const setFile = (
  _file: string | null | ((prev: string | null) => string | null)
) => {
  if (typeof _file === "function") {
    file.set(_file(file.get()));
    return;
  }
  file.set(_file);
};
