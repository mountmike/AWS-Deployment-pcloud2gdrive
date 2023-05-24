const { Pool } = require("pg")
const config = require("../config")
console.log(config.db);

module.exports = new Pool(config.db)


