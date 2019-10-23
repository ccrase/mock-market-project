import React, { useEffect, useState } from 'react';
import Chart from "chart.js";
import { MDBContainer } from "mdbreact";

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

    let getData = async () => {
      let res = await fetch('/api/graph')
      let data = await res.json()
      setStockData(await data)
      console.log(await data)
    }
    getData()

    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        datasets: [
          // {
          //   label: "S&P 500",
          //   data: stockData.sp500,
          //   pointStyle: "line",
          //   borderColor: 'rgba(255, 187, 51, 0.6)',
          //   backgroundColor: "rgba(0,0,0,0)",
          // },
          // {
          //   label: "DOW",
          //   data: stockData.dow,
          //   pointStyle: "line",
          //   borderColor: "rgba(0, 200, 81, 0.6)",
          //   backgroundColor: "rgba(0,0,0,0)"
          // },
          // {
          //   label: "NASDAQ",
          //   data: stockData.nasdaq,
          //   pointStyle: "line",
          //   borderColor: "rgba(51, 181, 229, 0.6)",
          //   backgroundColor: "rgba(0,0,0,0)"
          // },
          {
            label: info.companyName,
            data: info.dailyPercentChg,
            pointStyle: "line",
            borderColor: "rgba(51, 181, 229, 0.6)",
            backgroundColor: "rgba(0,0,0,0)"
          }
        ]
      }
    });
  }, [stockData, info])


  return (
    <MDBContainer style={{ backgroundColor: "white", backgroundImage: "url(" + info.image + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "200px 200px" }}>
      <h3>{info.companyName+" "} % Change Chart</h3>
      <canvas
        id="myChart"
        ref={chartRef}>
      </canvas>      
    </MDBContainer>
  );
}

export default Graph;

