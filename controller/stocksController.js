const db = require("../models");
const axios = require("axios");


// Defining methods for the booksController
module.exports = {
  findAllAPI :function(req, res){
    axios
    .get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&apikey=V095HJYQ4HICG0NL",{ params:{symbol: req.query.q}})
    .then(({data}) =>{ 
      //console.log(data);
      let time=Object.keys(data["Time Series (5min)"])[0]
      let result= data["Time Series (5min)"][time]
      res.json({
        result,
        time
      })
    })
    .catch(err => res.status(422).json(err));
   },

   create: function(req, res) {
    console.log(req.body);
    var asking_quantity=req.body.quantity;
    var available_quantity=0;
    if(req.body.order_type === "sell"){
    db.Order
    .find({"ticker_name":req.body.ticker_name ,"order_type":"buy",available_quantity :{$gt:0}})//"available_quantity" :{$gt:0}
    .then(dbModel => {
      if(asking_quantity !== 0){
      for(var i=0;i<dbModel.length;i++){

        if(asking_quantity !== 0){
          if (parseInt(asking_quantity) === parseInt(dbModel[i].available_quantity)){
            console.log("inside equal");
            asking_quantity = 0;
            available_quantity = 0;
            adjustQuantity(dbModel[i]._id,available_quantity);
          }else if(parseInt(asking_quantity) > parseInt(dbModel[i].available_quantity)){
            console.log("inside greaterthan ");
            asking_quantity = parseInt(asking_quantity)-parseInt(dbModel[i].available_quantity);
            available_quantity=0;
            adjustQuantity(dbModel[i]._id,available_quantity);
          }else if (parseInt(asking_quantity) < parseInt(dbModel[i].quantity)){
            console.log("inside lessthan ");
            available_quantity=(parseInt(dbModel[i].available_quantity)-parseInt(asking_quantity));
            asking_quantity = 0;
            adjustQuantity(dbModel[i]._id,available_quantity);
          }else{
            console.log("In defaults");
          }
          
        }
          // console.log("asking_quantity " + asking_quantity);
          // console.log("available_quantity " + available_quantity);
          // console.log("dbModel[i].quantity " + dbModel[i].quantity)
      }
      }
    })
    .catch(err => console.log(err));
    }

    function adjustQuantity(id,available_quantity){
     console.log("id is "+ 'ObjectId("'+id+'")');
     console.log("available_quantity " + available_quantity );
     db.Order.updateOne
     (
       {"_id":id},
       {$set:{"available_quantity":available_quantity}}
     )
    //Order.where({ _id: id }).update({ available_quantity:available_quantity })
    .then(data=>console.log(data))
    .catch(err => console.log(err));
    }

    function setTempQuantity(type,tickerName){
      db.Order.find({"ticker_name":tickerName ,"order_type":"buy"})
        .then(data=>{
          console.log(data);
          if(type === "sucess"){
          for(let i=0;i<data.length;i++){
          db.Order.update(
            {"_id":data[i]._id},
            {$set:{"temp_available_quantity":parseInt(data[i].available_quantity)}}
            )
         .then(data=>console.log(data))
         .catch(err => console.log(err));
          }
         }else if(type === "fail"){
          for(let i=0;i<data.length;i++){
            db.Order.update(
              {"_id":data[i]._id},
              {$set:{"available_quantity":parseInt(data[i].temp_available_quantity)}}
              )
           .then(data=>console.log(data))
           .catch(err => console.log(err));
            }
         }
        })
      .catch(err => console.log(err));  
    }

    function setUserMoney(type,amount,id){//need to add 3rd argument user id
      db.User.findOne({"_id":id})
        .then(data=>{
          console.log(data);
          console.log("amount"+amount);
          console.log("account_value"+data.account_value);
          //console.log(data.account_value-amount);
            
          if(type === "buy"){
          
          db.User.update(
            {"_id":data._id},
            {$set:{"account_value":data.account_value-amount}}
            )
         .then(data=>console.log(data))
         .catch(err => console.log(err));
          
         }else if(type === "sell"){
          
            db.User.update(
              {"_id":data._id},
              {$set:{"account_value":data.account_value+amount}}
              )
           .then(data=>console.log(data))
           .catch(err => console.log(err));
            
         }
        })
      .catch(err => console.log(err));
    }

    axios
    .get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&apikey=4H5CGJD3YP7ZTU0V",{ params:{symbol: req.body.ticker_name}})
    .then(({data}) =>{ 
      let time=Object.keys(data["Time Series (5min)"])[0]
      let result= data["Time Series (5min)"][time]
      console.log(result);
      if(req.body.order_type === "buy"){
       var stock={
       ticker_name:req.body.ticker_name,
       order_type:req.body.order_type,
       per_stock_amount:result["1. open"],
       quantity:req.body.quantity,
       total_amount_invest:req.body.quantity*result["1. open"],
       total_amount_earn:0,
       available_quantity:req.body.quantity,
       temp_available_quantity:req.body.quantity
      }
      }else if(req.body.order_type === "sell"){
        var stock={
          ticker_name:req.body.ticker_name,
          order_type:req.body.order_type,
          per_stock_amount:result["1. open"],
          quantity:req.body.quantity,
          total_amount_invest:0,
          total_amount_earn:req.body.quantity*result["1. open"],
          available_quantity:0,
          temp_available_quantity:0
          }
      }else{
        var stock={}
      }
      //console.log(stock)
      if(stock === {}){
        throw(err);
      }else {
        if(stock.quantity !== 0 && (stock.total_amount_earn!==0 || stock.total_amount_invest !== 0)){
        var order={};  
      db.Order
      .create(stock)
      .then(dbModel => {
        order=dbModel;
        console.log(dbModel);

        if(dbModel.order_type === "sell"){
        setTempQuantity("sucess",dbModel.ticker_name);
          setUserMoney("sell",dbModel.total_amount_earn,req.body.id);//dbModel._id
        }

        if(dbModel.order_type === "buy"){
          setUserMoney("buy",dbModel.total_amount_invest,req.body.id);
        }
        
        return db.User.findOneAndUpdate({ _id: req.body.id },  {$push : { Order: dbModel._id }});
        //res.json(dbModel)
      }) 
      .then(function(dbUser) {
        // If we were able to successfully update an User, send it back to the client
        res.send(order);
      }) 
      .catch(err => {
        console.log(stock.ticker_name);
        console.log(err);
        setTempQuantity("fail",stock.ticker_name);
        res.status(422).json(err)});
      }else{
        throw (err);
      }
      }
      })
      
      .catch(err => console.log(err)); 
    
  },

  findAll:function(req, res) {
    console.log({ params:{name: req.query.name}});
    console.log(req.query.id);

    db.User.findOne({_id : req.query.id})
    .populate({ 
      path:"Order",
      match:{ticker_name:req.query.name}
    })
    .then(dbModel => res.json(dbModel.Order))
    .catch(err => res.status(422).json(err));
   
  }
};
