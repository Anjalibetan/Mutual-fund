import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);




const options = {
    maintainAspectRatio: false,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    legend: {
      display: true,
      position: 'top',
    },
    plugins:{
        legend: {
            display: true,
            position: 'top',
          },
        title: {
        display: true,
        text: 'Mutaul fund chart',
    },
}
    
  };

const Linechart = () => {
    const [data, setData] = useState({
        labels: [],
        datasets:[] 
        
    });
    useEffect(() => {
        const fetchData= async()=> {
            try {
                const response = await fetch('https://api.mfapi.in/mf/114667');
                const result = await response.json();
        
                const date=[];
                const nav =[];

                for (const val of result.data) {
                    date.push(val.date);
                    nav.push(val.nav)

                }
                setData({
                    labels: date,
                    datasets: [
                        {
                            label: 'NAV',
                            data:nav,
                            fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
                        },
                    ],
                })

             } catch(error) { console.error('Error fetching data:', error);

}                
            };
    

            fetchData();

}, []);
    return (
        <div  style={{ width:'150',height:'400px'}}>
            <Line data={data} options={options}  />
            <Link  className='btn btn-success'to='/'>Back</Link>
        </div>

        
    )
    
}


export default Linechart;