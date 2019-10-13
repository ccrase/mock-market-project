import React, { Component } from "react";
import Navbar from "../../components/Navbar/index";
import API from "../../utils/API";

class App extends Component {

  saveStock = () =>{
    console.log("I MADE IT TO SAVEstock!");
    API.saveStock({
    ticker_name:"app" ,
    order_type:"buy",
    per_stock_amount :12 ,
    quantity:2,
    total_amount_invest:24,
    total_amount_earn:0
    })
      .then(res => alert("This stock has been added to database"))
      .catch(err => console.log(err));
  } 

  componentDidMount() {
    this.saveStock();
   }

    render(){
        return(
          <Navbar/>
          
        )
        }
}

export default App;