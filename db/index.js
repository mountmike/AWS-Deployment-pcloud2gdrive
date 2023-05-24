const { Pool } = require("pg")
const config = require("../config")

var conString = `postgres://${config.db.user}:${config.db.password}@${config.db.host}:5432/pcloud2gdrive`

module.exports = new Pool(conString)


