import React, { useEffect, useState } from 'react';
import Chart from "chart.js";
import { MDBContainer } from "mdbreact";
import './index.css';

 const Graph = (props) => {
  const info = {
    image: props.image,
    stockPricing: props.historicalInfo,
    companyName: props.companyName,
    dailyPercentChg: props.dailyPercentChg
  }
  console.log("props is working:", info.dailyPercentChg);

  const [stockData, setStockData] = useState([])
  const chartRef = React.createRef();
  
  useEffect(() => {

    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Today",-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,-26,-27,-28,-29,-30,-31,-32,-33,-34,-35,-36,-37,-38,-39,-40,-41,-42,-43,-44,-45,-46,-47,-48,-49,-50,-51,-52,-53,-54,-55,-56,-57,-58,-59,-60],
        datasets: [
          {
            label: info.companyName,
            data: info.dailyPercentChg,
            pointStyle: "line",
            borderColor: 'rgb(10,86,143)',
            backgroundColor: "rgba(0,0,0,0)"
          }
        ]
      }
    });
  }, [stockData, info])


  return (
    <MDBContainer className='graphBackground'>
      <h3 className='chartTitle'>{info.companyName+" "} % Change Chart</h3>
      <canvas style={{ color: 'white', backgroundColor: "white", backgroundImage: "url(" + info.image + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "200px 200px" }}
        id="myChart"
        ref={chartRef}>
      </canvas>
      <br></br>     
    </MDBContainer>
  );
}

export default Graph;

