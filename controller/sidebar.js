const db = require("../models");
const alpha = require('../controller/alphaVantage')

module.exports = async (id, cb) => {
    const populatedUser = await db.User.findOne({ "_id": id })
        .populate("Order")
        .then(results => results)
        .catch(err => err);

    let portfolioPrices = { symbols: [] };
    //console.log(await populatedUser)
    for (let i in await populatedUser['Order']) {
        let order = populatedUser['Order'][i];
        let symbol = order.ticker_name;
        if (!portfolioPrices.symbols.includes(symbol)) {
            portfolioPrices.symbols.push(symbol)
        }
    }

    const doMath = () => {
        for (let i in populatedUser['Order']) {
            let order = populatedUser['Order'][i];
            let symbol = order.ticker_name;
            let quote = portfolioPrices[symbol].quote
            portfolioPrices[symbol].price += (order.quantity * quote['05. price']);
        }
        cb(portfolioPrices);
    }

    let asyncCounter = 0;
    for (let i = 0; i < portfolioPrices.symbols.length; i++) {
        let symbol = portfolioPrices.symbols[i];
        alpha.now(symbol, data => {
            let stock = data['Global Quote']
            portfolioPrices[symbol] = { quote: stock };
            portfolioPrices[symbol].price = 0;
            portfolioPrices[symbol].percent = stock['10. change percent'];
            asyncCounter+=1;
            if (asyncCounter === portfolioPrices.symbols.length){doMath()};

        });
    }
}