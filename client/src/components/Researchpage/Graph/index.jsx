import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const Chartprops = (props) => {
  const data = {historicalInfo: props.historicalInfo.close,
                dataLine: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                            label: "My First dataset",
                            fill: true,
                            lineTension: 0.3,
                            backgroundColor: "rgba(225, 204,230, .3)",
                            borderColor: "rgb(205, 130, 158)",
                            borderCapStyle: "butt",
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: "miter",
                            pointBorderColor: "rgb(205, 130,1 58)",
                            pointBackgroundColor: "rgb(255, 255, 255)",
                            pointBorderWidth: 10,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgb(0, 0, 0)",
                            pointHoverBorderColor: "rgba(220, 220, 220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: props.historicalInfo.close
                          },]
                        }
                      }
                    
    return (
      <MDBContainer>
        <h3 className="mt-5 float-right">Line chart</h3>
        <Line data={data.historicalInfo} options={{ responsive: true }} />
      </MDBContainer>
    );
  }


export default Chartprops;