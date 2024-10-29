import express from 'express'

const app = express();

import * as path from 'path';
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

const routes = express.Router()

app.get("/", (req, res) =>  {
  const { quantCard } = req.query || []

  res.render("index", {quantCard: quantCard})}
)

app.listen(3000, () => console.log('listening'));

