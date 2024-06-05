import { FileUploader } from "react-drag-drop-files";
import "./step0.css";
import { setFile } from "../../context/file";
import { setStep } from "../../context/step";
import { useEffect, useState } from "react";

const StepView = () => {
  const [fileState, setFileState] = useState<File | null>(null);

  const handleUpload = (file: File) => {
    setFileState(file);
  };

  useEffect(() => {
    if (fileState) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(fileState);
      fileReader.addEventListener("load", () => {
        setFile(fileReader.result as string);
        setStep((old) => old + 1);
      });
    }
  }, [fileState]);

  return (
    <FileUploader
      classes="w-full !h-full !max-w-[unset] justify-center gap-4 flex-col !border-primary-500"
      label="Sube o arrastra una imagen aquí"
      types={["JPG", "PNG"]}
      handleChange={handleUpload}
    />
  );
};

export default StepView;
