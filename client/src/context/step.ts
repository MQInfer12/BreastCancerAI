import { atom } from "nanostores";

export const step = atom(2);

export const setStep = (_step: number | ((prev: number) => number)) => {
  if (typeof _step === "function") {
    step.set(_step(step.get()));
    return;
  }
  step.set(_step);
};
