const express = require("express")
const app = express()
const config = require("./config")
const db = require("./db");
const cors = require("cors")
const session = require('express-session')
const pgSession = require('connect-pg-simple')(session);
const path = require("path");

const userController = require("./controllers/user_controller")
const sessionController = require("./controllers/session_controller")
const gDriveController = require("./controllers/gdrive_controller")
const pCloudController = require("./controllers/pcloud_controller")
const taskController = require("./controllers/task_controller")

app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(require("./middlewares/method_override"))
app.use(require("./middlewares/check_tokens"))
app.use(session({
  store: new pgSession({
    pool : db,                // Connection pool
    tableName: "session"
  }),
  secret: process.env.SESSION_SECRET || "godogsgo",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  // Insert express-session options here
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api/user", userController)
app.use("/api/session", sessionController)
app.use("/api/gdrive", gDriveController)
app.use("/api/pcloud", pCloudController)
app.use("/api/task", taskController)


app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})

// db.query(``).then(response => console.log(response + "response"))    
