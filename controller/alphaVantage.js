const axios = require('axios')
const apikey = process.env.apikey

module.exports = alphaVantage = {

    search: (userInput) => {
        axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${userInput.toString()}&apikey=`+ apikey)
        .then(json=>{
            console.log(json.data);
            return json.data
        })
        .catch(err=>console.log(err))
    },

    now: (ticker) => {
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=`+ apikey)
        .then(json=>{
            console.log(json.data);
            return json.data
        })
        .catch(err=>console.log(err))
    },

    minute: (ticker) => {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=`+ apikey)
        .then(json=>{
            console.log(json.data);
            return json.data
        })
        .catch(err=>console.log(err))
    },

    minute15: (ticker) => {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=15min&apikey=`+ apikey)
        .then(json=>{
            console.log(json.data);
            return json.data
        })
        .catch(err=>console.log(err))
    },

    hour: (ticker) => {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=60min&apikey=`+ apikey)
        .then(json=>{
            console.log(json.data);
            return json.data
        })
        .catch(err=>console.log(err))
    },

    day: (ticker) => {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=`+ apikey)
        .then(json=>{
            console.log(json.data);
            return json.data
        })
        .catch(err=>console.log(err))
    },

    week: (ticker) => {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=`+ apikey)
        .then(json=>{
            console.log(json.data);
            return json.data
        })
        .catch(err=>console.log(err))
    },

    month: (ticker) => {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${ticker}&apikey=`+ apikey)
        .then(json=>{
            console.log(json.data);
            return json.data
        })
        .catch(err=>console.log(err))
    },
}