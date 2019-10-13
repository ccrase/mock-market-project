const axios = require('axios')

module.exports = iex = {

    many: (arr, cb) => {
        axios.get('https://ws-api.iextrading.com/1.0/tops?symbols='+arr.join(','))
        .then(({data})=>{
            cb(data)
        })
        .catch(err=>console.log(err))
    },
}