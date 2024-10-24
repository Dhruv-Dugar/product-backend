const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

const productRoutes = require('./routes/productRoutes')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(bodyParser.json())


app.use('/api/products', productRoutes)


let mongoURI = `mongodb+srv://dhruvdugar02:dhruvdugar@cluster0.6ak2e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(mongoURI)
.then(() => console.log("Mongo db is connected succesfully"))
.catch((err) => console.log(`${err} There is problem in connected with database`))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})