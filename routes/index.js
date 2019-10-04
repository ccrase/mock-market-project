const home = require('./home')

const apiRoutes = (app) => {
    home(app)
}

module.exports = apiRoutes;