const router = require("express").Router();
const alpha = require('../../../controller/alphaVantage')
const iex = require('../../../controller/iex')

module.exports = homeRoutes = (app) => {
    app.get('/api/graph', async (req, res) => {
        let three = {};
        let counter = 0;
        const count = (data) => {
            counter += 1;
            if(counter === 3){
                let response = {};
                response.timeKeys = Object.keys(data['Time Series (60min)']).slice(1,14);
                for(let prop in three){
                    response[prop] = [];
                    let prev;
                    for (let i in three[prop]){
                        response[prop].push(parseFloat(three[prop][i]['4. close'])/parseFloat(prev))
                        prev = three[prop][i]['4. close']
                    }
                    response[prop] = response[prop].slice(1,14)
                    console.log(`found pricing of "${prop}"`)
                }
                res.json(response);
            }
        }
        alpha.hour('NDAQ',(data)=>{
            three.nasdaq = Object.values(data['Time Series (60min)']).slice(0,14);
            count(data);
        })
        alpha.hour('.INX',(data)=>{
            three.sp500 = Object.values(data['Time Series (60min)']).slice(0,14);
            count(data);
        })
        alpha.hour('.DJI',(data)=>{
            three.dow = Object.values(data['Time Series (60min)']).slice(0,14);
            count(data);
        })
    })

    app.get('/api/scrolling-stocks', async (req, res) => {
        const symbolList = ['AAPL', 'MSFT', 'GOOG', 'AMZN', 'FB', 'BRK-A', 'BABA', 'JNJ', 'JPM', 'XOM', 'BAC', 'WMT', 'WFC', 'RDS-A', 'V', 'PG', 'BUD', 'T', 'CVX', 'UNH', 'PFE', 'RHHBY', 'CHL', 'HD', 'INTC', 'TSM', 'VZ', 'ORCL', 'C', 'NVS']
        iex.many(symbolList, data => {
            res.json(data)
        });
    })
}