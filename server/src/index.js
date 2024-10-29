const express = require('express');

const app = express();
const path = require("path");

const views = __dirname + "/views/"

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

const routes = express.Router()

app.get("/", (req, res) =>  {
  const { quantCard } = req.query || []

  res.render("index", { quantCard: quantCard })}
)

app.listen(3000, () => console.log('listening'));

