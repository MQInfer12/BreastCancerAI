import { useStore } from "@nanostores/react";
import { step } from "../../context/step";
import Step0 from "./step0";
import Step1 from "./step1";
import Step2 from "./step2";

const StepView = () => {
  const $step = useStore(step);
  console.log($step);

  const components = [
    {
      title: "Sube una imagen",
      component: <Step0 />,
    },
    {
      title: "Cargando...",
      component: <Step1 />,
    },
    {
      title: "Resultados",
      component: <Step2 />,
    },
  ];

  return (
    <div className="w-full h-full bg-white/40">
      <div key={$step} className="w-full h-full animate-[appear_0.3s]">
        <section className="w-full h-full flex flex-col items-center p-5 gap-8">
          <h3 className="text-primary-500/80 text-3xl font-medium">
            {components[$step].title}
          </h3>
          <div className="flex-1 w-full">{components[$step].component}</div>
        </section>
      </div>
    </div>
  );
};

export default StepView;
