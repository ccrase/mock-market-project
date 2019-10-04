//const db = require('../controller/db')
const alpha = require('../controller/alphaVantage')
const iex = require('../controller/iex')

module.exports = homeRoutes = (app) => {
    app.get('/api/graph', (req, res) => {
        const three = {};
        three.nasdaq = alpha.hour('NDAQ')
        three.sp500 = alpha.hour('.INX')
        three.dow = alpha.hour('.DJI')
        res.json(three)
    })

    app.get('/api/scrolling-stocks', async (req, res) => {
        const symbolList = ['AAPL', 'MSFT', 'GOOG', 'AMZN', 'FB', 'BRK-A', 'BABA', 'JNJ', 'JPM', 'XOM', 'BAC', 'WMT', 'WFC', 'RDS-A', 'V', 'PG', 'BUD', 'T', 'CVX', 'UNH', 'PFE', 'RHHBY', 'CHL', 'HD', 'INTC', 'TSM', 'VZ', 'ORCL', 'C', 'NVS']
        iex.many(symbolList, data => {
            res.json(data)
        });
    })
}