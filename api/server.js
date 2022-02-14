// api/server.js

const express = require("express")
const app = express()

app.get("/", function(req, res) {
  res.send("Jason Derulo!")
})

app.listen(3000, () => {
  console.log("app listening on port 3000")
})