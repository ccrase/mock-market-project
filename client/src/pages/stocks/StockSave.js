import React, {Component} from "react";
import Navbar from "../../components/Navbar/index";
import {Container,Row,Col} from "../../components/Grid";
import Input from "../../components/input";
import Button from "../../components/Button"
import API from "../../utils/API";
import ModalPage from "../../components/ModalPage";
import {MDBBtn,MDBInput, MDBJumbotron,MDBContainer,MDBInputGroup,MDBRow, MDBCol,Modal, ModalBody, ModalHeader, ModalFooter} from "mdbreact";
import "./style.css";

const axios = require("axios");



class SaveStock extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      ticker_name: "",
      order_type: "",
      quantity: 0,
      perstockprice: 0,
      available_quantity: 0,
      temp_quantity: 0,
      total_amount_invest: 0,
      total_amount_earn: 0,
      stock: [],
      stocks: [],
      openPrice :0,
      closePrice :0,
      highPrice :0,
      lowPrice :0,
      volume:0,
      logo:"",
      account_value:0,
      user:[],
      show:false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.handleSell = this.handleSell.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.displayTicker = this.displayTicker.bind(this);
  }

  //for stocks buying functions

  handleBuy = () => {
    console.log("Inside Buy");
    
    let length=this.state.stocks.length;
    console.log(length);
    if(this.state.ticker_name ){
    if(length != 0){
    this.setState({
      order_type: "buy",
      perstockprice: this.state.stocks.result["1. open"]
    });
   }else{
    alert("Please press search button ");
   }
    // this.handleFormSubmit();

  }else{
    alert("Please search the ticker");
  }
}


  //for stocks selling functions

  handleSell = () => {
        
    let length=this.state.stocks.length;
    if(this.state.ticker_name ){
      if(length != 0){
    this.setState({
      order_type: "sell",
      perstockprice: this.state.stocks.result["1. open"]
    });
    //this.handleFormSubmit();
    // this.checkTicker();
    console.log(this.state.stock.length);
    if (this.state.stock.length > 0) {
      this.displayTicker();
    } else {
      alert("you don't have stocks for this ticker" + this.state.ticker_name);
    }
  }else{
    
      alert("Please press search button ");
     
  }
  }else{
    alert("Please search the ticker");
  }
}

  checkTicker = () => {
    console.log("Inside checkTicker");
    console.log(this.state.user._id);
    console.log(this.state.ticker_name);
    API.loadStock({
      name:this.state.ticker_name,
      id:this.state.user._id})
      .then(res => {
        this.setState({
          stock: res.data
        })
        console.log(res.data)
        return;
      })
      .catch(err => console.log(err));
  }

  displayTicker = () => {
    var buy_quantity = 0;
    
    const buyStock = this.state.stock.filter(function (data) {
      if (data.order_type === "buy"&& data.available_quantity !== 0) {
        return true;
      }
    });

    console.log(buyStock);

    buyStock.map(newStock => {
      console.log("inside map");
      console.log(newStock.quantity);
      buy_quantity = buy_quantity + newStock.available_quantity;
    });

   
    //console.log(buyStock);

    this.setState({
      available_quantity: buy_quantity
    });
  }

  
  //common functions 

  //once page loaded
  componentDidMount() {
    const userPass = this.props.user;
    console.log(userPass);

    this.setState({
          user:userPass
        });
   
    
    if (this.props.id) {
      alert(this.props.id);
      let input = this.props.id.toUpperCase();
      this.setState({
        ticker_name: input     
      });
      
    }
  }

  //ticker change
  handleTickerChange = (event) => {
    
    const {name,value} = event.target;
    this.setState({
      [name]: value.toUpperCase()
    });

  }

  //quantity change
  handleInputChange = (event) => {
    event.preventDefault();
    if(this.state.order_type){
    const {name,value} = event.target;

    this.setState({
      temp_quantity: value.replace(/\D/,'')
    });
    var valueSet = false;
    console.log(value);
    
    if (this.state.order_type === "sell") {
      console.log(value);
      if (value <= this.state.available_quantity) {
        valueSet = true;
      } else {
        console.log(value);
        alert("you don't have enough stocks");
        console.log("you don't have enough stocks");
        valueSet = false;
      }
    } else {
      valueSet = true;
    }
    

    if (valueSet) {
      this.setState({
        [name]: value.replace(/\D/,''),
        total_amount_invest:value * this.state.perstockprice,
        account_value:this.state.user.account_value
      });
    } else {
      this.setState({
        [name]: 0
      });
    }
  }else{
    alert("Before selecting quantity, please choose buy or sell");
  }
    
  }



  //pressed search button 
  handleFormSubmit = () => {
    axios
    .get("https://financialmodelingprep.com/api/v3/company/profile/"+ this.state.ticker_name)
    .then(({data}) =>{ 
      //console.log(data.profile.image);
      this.setState({logo:data.profile.image})
      })
    .catch(err => console.log(err));

    API.getStocks(this.state.ticker_name)
      .then(res => {
        this.setState({
          stocks: res.data,
          openPrice :res.data.result["1. open"],
          closePrice :res.data.result["4. close"],
          highPrice :res.data.result["2. high"],
          lowPrice :res.data.result["3. low"],
          volume:res.data.result["5. volume"]
        })
      })
      .catch(err => console.log("Please Press Search"));

  };

  //final form submit   
  handleSubmit = () => {
    console.log("Inside submit");
    console.log(this.state.order_type);
    if (this.state.order_type === "buy") {
      if (this.state.quantity.length > 0 && this.state.quantity > 0) {
        if(this.state.account_value >= this.state.total_amount_invest){
        this.saveStock();
        }else{
          alert("Sorry Insufficient balance");
        }
      } else {
        alert("please select valid quantity");
      }
    } else if (this.state.order_type === "sell") {
      if (this.state.quantity.length > 0 && this.state.quantity > 0) {
        this.saveStock();
      } else {
        alert("please select valid quantity");
      }
    } else {
      alert("Please select the buying or selling the stock ");
    }
  }

  //post route for stocks

  saveStock = () => {
    console.log("I MADE IT TO SAVEstock!");
    //console.log(this.state.ticker_name,this.state.order_type,this.state.quantity);
      API.saveStock({
          ticker_name: this.state.ticker_name,
          order_type: this.state.order_type,
          quantity: this.state.quantity,
          id:this.state.user._id
        })
        .then(res => alert("This stock has been added to database"))
        .catch(err => console.log(err));

  }

  showModal = (event) =>{
    this.setState({
      show: true
    });
  }
  toggle = nr => () => {
    this.setState({
      show: false
    });
  }

   
  render() {
    return ( 
      <div id="mainDiv" className="clearfix">
      <Row>

      <Col size ="md-7">
      <MDBJumbotron className="clearfix">
      <MDBContainer className="clearfix" >
       
      <MDBRow className="mb-4">
        <MDBCol md="4">
          <img src= {this.state.logo} className="img-fluid" alt="" />
        </MDBCol>
      </MDBRow> 
      <MDBInputGroup readOnly
      material
      prepend="Ticker Name :"
      value = {this.state.ticker_name}
      />
      <MDBInputGroup readOnly
      material
      prepend="Open Price :"
      value = {this.state.openPrice}
      />
      <MDBInputGroup readOnly
      material
      prepend=" High Price :"
      value = {this.state.highPrice}
      />
      <MDBInputGroup readOnly
      material
      prepend="Low price :"
      value = {this.state.lowPrice}
      />
      <MDBInputGroup readOnly
      material
      prepend="Close Price :"
      value = {this.state.closePrice}
      />
      <MDBInputGroup readOnly
      material
      prepend="Volume :"
      value = {this.state.volume}
      />
      </MDBContainer>
      </MDBJumbotron>
      </Col>

      <Col size ="md-5">
        <MDBJumbotron>
         <MDBContainer>
         <ModalPage show={this.state.show} toggle={this.toggle} /> 
          <Row size = "md-12">
          <Col size = "md-12" >
           <h2>Trade</h2>
          </Col>
          </Row>
          <h5> Search Ticker </h5> 
      <Row >
      <Col size = "sm-6 md-5" >
      <Input  id="searchInput"
           className="input-group-text" name = "ticker_name" 
            value = {this.state.ticker_name}
            onChange = {this.handleTickerChange}
            placeholder = "Search For a Ticker" /
      >
      </Col> 
      <Col size = "sm-6 md-5" >
      < Button id="searchbtn"
          onClick = {(event)=>{event.preventDefault();this.handleFormSubmit(event);this.checkTicker()}}
          type = "gradient= blue"
          className = "btn" 
         >
          
      Search
      </Button> 
      </Col> 
      </Row>
      <Row>
      <Col size = "md-12">
      <h4 > Market order </h4> 
      </Col> 
      </Row> 
           <h5 > Ticker Name: </h5>
          <Row id="ticker1">
          <Col size = "md-5" >
          <Input  className="input-group-text"  readOnly 
           name = "ticker_name"
           value = {this.state.ticker_name}
           //onChange={this.handleInputPrice}
           placeholder = "ticker_name"
          />
          </Col>
          {/* <Col size = "md-4" >
          <Button onClick = {(event) => {this.handleFormSubmit(event);this.checkTicker()}}
           type = "success"
           className = "btn" >
          Search
         </Button> 
         </Col>  */}
         </Row>

      
      <Row size = "md-12" >
      <Col size = "md-12">
      <h5> Side: </h5> 

      <Button 
      onClick = {this.handleBuy}
      type = "gradient= blue"
      className = "btn" >
      BUY 
      </Button> 
      {/* <MDBBtn color="primary">MDBButton</MDBBtn> */}
      <Button 
      onClick = {this.handleSell}
      type = "gradient= blue"
      className = "btn" >
      SELL 
      </Button>
      </Col>
      </Row> 
      <Row>
      <Col size = "md-12" >
      <h5> Quantity: </h5> 
      <Input className="input-group-text"
      name = "quantity"
      type ="Number"
      value = {this.state.temp_quantity}
      onChange = {this.handleInputChange}
      placeholder = "quantity" 
      />
      {/* <MDBInput type="number">quantity</MDBInput> */}
      </Col>
      </Row> 
      <Row>
      <Col size = "md-12" >
      <h5> Per Stock Price: </h5>
      <Input className="input-group-text" readOnly 
      name = "perstockprice"
      value = {this.state.perstockprice}
      //onChange={this.handleInputPrice}
      placeholder = "perstockprice" 
      />
      </Col>
      </Row> 
      <Row >
      <Col size = "md-12" >
      <h5 > Estimated Total Price: </h5> 
      <Input className="input-group-text" readOnly 
      name = "totalprice"
      value = {this.state.quantity * this.state.perstockprice}
      //onChange={this.handleInputChange}
      placeholder = "totalPrice" 
      />
      </Col> 
      </Row> 
      <Row size = "md-12" >
       <Col size = "md-12"> 
      <Button 
      onClick = {(event)=>{this.handleSubmit();this.showModal()}}
      type = "gradient= blue"
      className = "btn" >
      Submit 
      </Button> 
      </Col>
      </Row>
      </MDBContainer>
      </MDBJumbotron>
      </Col>
     
      </Row>
      </div>
    )
  }
}

export default SaveStock;