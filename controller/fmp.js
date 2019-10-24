const axios = require('axios')
const fmp = {
    daily:(tckr, cb) => {
        axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${tckr}?timeseries=10`)
        .then(({data})=>{
            cb(data);
        }).catch(err=> console.log(err))
    }
}

module.exports = fmp;