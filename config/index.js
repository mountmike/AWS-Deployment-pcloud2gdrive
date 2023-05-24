require("dotenv").config()

module.exports = {
  port: process.env.PORT,
  db: {
    connectionURL: process.env.POSTGRESQL_DB_CONNECTION_STRING,
    // host: process.env.POSTGRESQL_DB_HOST,
    // user: process.env.POSTGRESQL_DB_USER,
    // password: process.env.POSTGRESQL_DB_PASSWORD,
    // db: process.env.POSTGRESQL_DB,
    // port: 5432,
    // dialect: "postgres",
    // idleTimeoutMillis: 30000,
    // connectionTimeoutMillis: 3000,
  },
  gDriveAPI: {
    clientId: process.env.GDRIVE_CLIENT_ID,
    clientSecret: process.env.GDRIVE_CLIENT_SECRETE,
    redirectURI: process.env.GDRIVE_REDIRECT_URI,
    refreshToken: process.env.GDRIVE_REFRESH_TOKEN
  },
  pCloudAPI: {
    clientId: process.env.PCLOUD_CLIENT_ID,
    appSecret: process.env.PCLOUD_APP_SECRET,
    redirectURI: process.env.PCLOUD_REDIRECT_URI
  }
}
