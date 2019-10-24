import React, { useEffect, useState } from 'react';
import Chart from "chart.js";
import { MDBCard } from "mdbreact";
import './index.css'

const colors = ['red', 'blue', 'yellow', 'green', 'purple'];

const NavChart = (props) => {

  const navChartRef = React.createRef();
  useEffect(() => {
    if (props.data) {
      const prices = [];
      const labels = [];
      let counter = 0;
      for (let key in props.data) {
        if (key !== 'symbols') {

          prices.push(props.data[key].price);
          labels.push(key);
          counter += 1;
          if (counter === colors.length) { counter = 0; }
        }
      }
      const myNavChartRef = navChartRef.current.getContext("2d");

      new Chart(myNavChartRef, {
        type: 'pie',
        data: {
          datasets: [{data: prices,
            backgroundColor: [
						'#FF6384',
						'#FFCD56',
						'#4BC0C0',
            '#36A2EB',
            '#CDA0FF',
          ]}],
          labels: labels
        }
      });
    }
  }, [navChartRef])


  return (
      <MDBCard id="navChartHolder"className="my-3 py-5">
        <canvas
      id="navChart"
      ref={navChartRef}>
      </canvas>
      </MDBCard>
  )
}

export default NavChart;