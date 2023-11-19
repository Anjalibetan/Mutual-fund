import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  const [mutualFundData, setMutualFundData] = useState([]);

  useEffect(() => {
   
      fetch('https://api.mfapi.in/mf/114667')
        .then((response) => response.json())
        .then((res) => {console.log(res.data)
         setMutualFundData(res.data)}
        )

        .catch(error => console.error('Error fetching data:', error));
    

    
  }, []);

  return (
    <div className="container">
        <div className='card'>
            <div className='bg-primary text-white card-tile'>
      <h1>Mutual Fund Data</h1>
      </div>
      </div> <br></br>
      <Link className='btn btn-success' to='/chart'>Please show the chart</Link>
      <br></br> <br></br>
      <table className="table table-bordered table table-dark table-sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>NAV</th>
          </tr>
        </thead>
        <tbody>
          {mutualFundData.map(item => (
            <tr key={item.data}>
              <td>{item.date}</td>
              <td>{item.nav}</td>
            </tr>
          ))}
           
        </tbody>
      </table>

   
    </div>
  );
};

export default Home;