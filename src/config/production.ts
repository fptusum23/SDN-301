require('dotenv').config()
const sql = require('./database')

export default {
    server: {
        host: process.env.HOST_NAME,
        protocol: 'http',
        debug: true,
        name: 'SERVER NAME',
        port: process.env.PORT || 8765,
        secret: process.env.SERVER_SECRET,
        is_localhost: process.env.IS_LOCALHOST,
        logger: process.env.LOGGER ? JSON.parse(`${process.env.LOGGER}`) : []
    },
    database: {
        mongo: process.env.MONGOLAB_URI,
        sessionSecret: process.env.SESSION_SECRET,
        defaultPageSize: 50,
        sql: sql.production
    },
}
