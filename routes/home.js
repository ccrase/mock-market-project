const db = require('../controller/db')
const alpha = require('../controller/alphaVantage')
module.exports = homeRoutes = (app) => {
    app.get('/api/graph', (req, res)=> {
        const three = {};
        three.total = alpha.hour('VTSMX')
        three.sp500 = alpha.hour('.INX')
        three.dow = alpha.hour('.DJI')
        res.json(three)
    })
}