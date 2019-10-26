const alpha = require('../../../controller/alphaVantage')
const iex = require('../../../controller/iex')

const todaysPrices = {
    date: '',
    data: {}
}

const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
}

module.exports = homeRoutes = (app) => {
    app.get('/api/graph', async (req, res) => {
        if(getDate()===todaysPrices.date){ 
            console.log(todaysPrices.date);
            res.json(todaysPrices.data);
        }
        else{
        let three = {};
        let counter = 0;
        const count = (data) => {
            counter += 1;
            if(counter === 3){
                let response = {};
                response.timeKeys = Object.keys(data["Time Series (Daily)"]).slice(1,15).reverse();
                for(let prop in three){
                    response[prop] = [];
                    let prev;
                    for (let i in three[prop]){
                        response[prop].push(parseFloat(three[prop][i]['4. close'])/parseFloat(prev))
                        prev = three[prop][i]['4. close']
                    }
                    response[prop] = response[prop].slice(1,15).reverse()
                }
                res.json(response);
                todaysPrices.date = getDate();
                todaysPrices.data = response;
            }
        }
        alpha.day('NDAQ',(data)=>{
            three.nasdaq = Object.values(data["Time Series (Daily)"]).slice(0,15);
            count(data);
        })
        alpha.day('.INX',(data)=>{
            three.sp500 = Object.values(data["Time Series (Daily)"]).slice(0,15);
            count(data);
        })
        alpha.day('.DJI',(data)=>{
            three.dow = Object.values(data["Time Series (Daily)"]).slice(0,15);
            count(data);
        })
    }
})

    app.get('/api/scrolling-stocks', async (req, res) => {
        const symbolList = ['AAPL', 'MSFT', 'GOOG', 'AMZN', 'FB', 'BRK-A', 'BABA', 'JNJ', 'JPM', 'XOM', 'BAC', 'WMT', 'WFC', 'RDS-A', 'V', 'PG', 'BUD', 'T', 'CVX', 'UNH', 'PFE', 'RHHBY', 'CHL', 'HD', 'INTC', 'TSM', 'VZ', 'ORCL', 'C', 'NVS']
        iex.many(symbolList, data => {
            res.json(data)
        });
    })
}