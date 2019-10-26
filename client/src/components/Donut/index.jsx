import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["AAPL", "AMZN", "HD"]
        }
      },
      series: [
        {
          name: "Market Value",
          data: [2953.20, 5279.79, 1874.88]
        }
      ],
    }
    this.captureData = this.captureData.bind(this);
  }


  captureData(){
    var data = [];
    var categories = [];
    console.log("capture data");
    if(this.props.orders){
      console.log(this.props.orders.details)
      for(var i = 0; i < this.props.orders.length; i++){
        categories.push(this.props.orders[i].name);
        data.push(this.props.orders[i].market_value);
      };
      console.log(categories)
      this.state.options.xaxis.categories = categories;
      console.log(data)
      this.state.series[0].data = data;
    };
  };

  componentWillReceiveProps(){
    this.captureData();
  }

  componentDidUpdate(){
    this.captureData();
    console.log(this.state.options.xaxis.categories);
    console.log(this.state.series[0].data);
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="450"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Donut;



  
 