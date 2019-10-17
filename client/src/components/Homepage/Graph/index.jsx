import React, {useEffect, useState} from 'react';
import Chart from "chart.js";
import {MDBJumbotron} from 'mdbreact'

export default function Graph() {
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
                labels: stockData.timeKeys,
                datasets: [
                    {
                        label: "S&P 500",
                        data: stockData.sp500,
                        pointStyle: "line",
                        borderColor: 'rgba(255, 187, 51, 0.6)',
                        backgroundColor: "rgba(0,0,0,0)"
                    },
                    {
                        label: "DOW",
                        data: stockData.dow,
                        pointStyle: "line",
                        borderColor: "rgba(0, 200, 81, 0.6)",
                        backgroundColor: "rgba(0,0,0,0)"
                    },
                    {
                        label: "NASDAQ",
                        data: stockData.nasdaq,
                        pointStyle: "line",
                        borderColor: "rgba(51, 181, 229, 0.6)",
                        backgroundColor: "rgba(0,0,0,0)"
                    }
                ]
            }
        });
    }, [chartRef, stockData])




    return (
        <MDBJumbotron>
            <canvas
                id="myChart"
                ref={chartRef}>
            </canvas>
        </MDBJumbotron>
    )
}
