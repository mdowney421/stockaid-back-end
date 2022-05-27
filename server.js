// DEPENDENCIES
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const Stock = require('./models/stock.js')
const cors = require('cors')
// const seedData = require('./models/seed-data.js')
require('dotenv').config()


// CONNECTIONS
// mongoose.connect('mongodb://localhost:27017/stockdata')
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, () => {
    console.log('connected to mongo atlas...')
})
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


// RESTful CRUD ROUTES
// app.post('/stocks/seed', (req, res) => {
//     Stock.create(seedData, (error, createdSeedData) => {
//         res.json(createdSeedData)
//     })
// })

// app.post('/stocks', (req, res) => {
//     Stock.create(req.body, (error, createdStock) => {
//         res.json(createdStock)
//     })
// })

app.get('/', (req, res) => {
    res.send('hello world')
})

// app.get('/stocks', (req, res) => {
//     Stock.find({}, (error, foundStocks) => {
//         res.json(foundStocks)
//     })
// })

// app.put('/stocks/:id', (req, res) => {
//     Stock.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedStock) => {
//         res.json(updatedStock)
//     })
// })

// app.delete('/stocks/:id', (req, res) => {
//     Stock.findByIdAndRemove(req.params.id, (error, deletedStock) => {
//         res.json(deletedStock)
//     })
// })


// LISTEN
app.listen(3000, () => {
    console.log('listening...')
})