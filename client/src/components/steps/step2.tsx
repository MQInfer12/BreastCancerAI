import { useStore } from "@nanostores/react";
import { file } from "../../context/file";
import ReactApexChart from "react-apexcharts";

const Step2 = () => {
  const $file = useStore(file);

  const chartOptions: any = {
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: undefined,
            formatter: function (val: any) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["Porcentaje"],
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex items-end gap-10">
        <img
          src={$file || ""}
          className="w-64 h-64 rounded-lg border border-primary-500 object-cover"
        />
        <div className="h-full flex flex-col items-center gap-2">
          <h3 className="text-secondary-500/80 text-xl font-bold">Benigno</h3>
          <div className="w-48 h-full rounded-lg border border-primary-500 bg-secondary-500/10">
            <ReactApexChart
              options={chartOptions}
              series={[80]}
              type="radialBar"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
