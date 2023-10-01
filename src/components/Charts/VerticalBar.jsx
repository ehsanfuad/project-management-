import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function VerticalBar() {
  function formatNumberToFarsi(number) {
    return number.toLocaleString("fa"); // Assuming the browser supports 'fa' locale
  }
  const labels = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const data = {
    labels,
    datasets: [
      //   {
      //     label: "Dataset 1",
      //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //     backgroundColor: "rgba(255, 99, 132, 0.5)",
      //   },
      {
        label: "پروژه",
        data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "پروژه های انجام شده",
      },
    },
  };

  return <Bar id={3} options={options} data={data} />;
}

export default VerticalBar;
