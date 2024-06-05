import { useStore } from "@nanostores/react";
import { setStep, step } from "../context/step";
import { twMerge } from "../utils/twMerge";

const Sidebar = () => {
  const $step = useStore(step);

  return (
    <div className="w-96 border-r border-primary-500 flex flex-col items-center justify-center gap-10">
      <h3 className="text-primary-500/80 text-3xl font-medium">
        Sigue los pasos
      </h3>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <div
            className={twMerge(
              "w-8 h-8 rounded-full border transition-all duration-300",
              $step === 0
                ? "bg-primary-500 border-primary-500"
                : "border-primary-400"
            )}
          />
          <small className="font-bold text-secondary-500/80">Subir imagen</small>
        </div>
        <span className="w-14 border-b border-primary-400 mb-6" />
        <div className="flex flex-col items-center gap-2">
          <div
            className={twMerge(
              "w-8 h-8 rounded-full border transition-all duration-300",
              $step === 1
                ? "bg-primary-500 border-primary-500"
                : "border-primary-400"
            )}
          />
          <small className="font-bold text-secondary-500/80">Analizar</small>
        </div>
        <span className="w-14 border-b border-primary-400 mb-6" />
        <div className="flex flex-col items-center gap-2">
          <div
            className={twMerge(
              "w-8 h-8 rounded-full border transition-all duration-300",
              $step === 2
                ? "bg-primary-500 border-primary-500"
                : "border-primary-400"
            )}
          />
          <small className="font-bold text-secondary-500/80">Resultado</small>
        </div>
      </div>
      <button onClick={() => setStep((old) => (old + 1) % 3)}>Siguiente</button>
    </div>
  );
};

export default Sidebar;
