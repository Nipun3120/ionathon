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
      for(let i=1;i<=10;i++){
          dates.unshift(`${currentDate - i} ${month}`);
      }
      return dates;
  }
export const AnalyticsChart = () => {
    const labels = calculate10Dates()
    const data = {
        labels,
        datasets: [
          {
            label: 'Stock prices',
            data: labels.map(() => [1,2,3,4,5,6]),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
    const location = useLocation();
    const company = location.pathname;
    return <div>
        <span>Analytics I am for <br/>{company.substring(1)}</span>
        <Line style={{margin:'30px'}} data={data} />
    </div>
}