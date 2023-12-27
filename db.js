const Pool = require('pg').Pool;

const pool = new Pool({
    user: "konvict",
    host: "localhost",
    database: "students",
    password: "2130",
    port: 5433,

})


module.exports = pool;