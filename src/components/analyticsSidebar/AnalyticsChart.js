import { useLocation } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July","Aug","Sep","Oct", "Nov","Dec"];
  const calculate10Dates = () => {
    var today = new Date();
    const currentDate = today.getDate();
    const month = months[today.getMonth()];
      const dates = [];
      dates.push(`${currentDate} ${month}`);
      for(let i=1;i<=1;i++){
          dates.unshift(`${currentDate - i} ${month}`);
      }
      return dates;
  }

export const AnalyticsChart = ({apiData}) => {
    const labels = calculate10Dates()
    const data = {
        labels,
        datasets: [
          {
            label: 'Stock prices',
            data: [apiData.price, apiData.price+apiData.pred],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 1.0
          },
        ],
      };
    const location = useLocation();
    const company = location.pathname;

    return <div>
        <Line style={{margin:'30px'}} data={data} />
    </div>
}
// data: labels.map(() => [({apiData.price}, {apiData.pred + apiData.price}).toFixed(2)]),