const db = require("../models");
const alpha = require('../controller/alphaVantage')

module.exports = async (id) => {
    const populatedUser = await db.User.findOne({ "_id" : id })
        .populate("Order")
        .then(results => results)
        .catch(err => err);
    
    for (let i in await populatedUser['Order']){
        let order = populatedUser['Order'][i];
        let tckr = order.ticker_name;
        alpha.now(tckr, (data)=>{
            console.log(data)
        })
    }
}