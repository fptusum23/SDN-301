require('dotenv').config()
const sql = require('./database')

export default {
    server: {
        host: 'localhost',
        protocol: 'http',
        debug: true,
        name: 'LOCAL NAME',
        port: process.env.PORT || 8765,
        secret: process.env.SERVER_SECRET,
        is_localhost: process.env.IS_LOCALHOST,
        logger: process.env.LOGGER ? JSON.parse(`${process.env.LOGGER}`) : []
    },
    database: {
        mongo: process.env.MONGODB_URI,
        sessionSecret: process.env.SESSION_SECRET,
        defaultPageSize: 50,
        sql: sql.development
    }
}
