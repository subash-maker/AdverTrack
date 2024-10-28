import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['New Users', 'Returning Users'],
    datasets: [
      {
        data: [64, 36],
        backgroundColor: [
          'rgb(124, 58, 237)',
          'rgb(196, 181, 253)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '70%',
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;