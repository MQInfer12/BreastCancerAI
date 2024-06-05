import { useEffect } from "react";
import "./step1.css";
import { setStep } from "../../context/step";

const Step1 = () => {
  useEffect(() => {
    setTimeout(() => {
      setStep((old) => old + 1);
    }, 2000);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <div className="loader" />
      <small className="font-bold text-secondary-500/80">
        Espere un momento por favor...
      </small>
    </div>
  );
};

export default Step1;
