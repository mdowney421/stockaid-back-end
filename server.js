// DEPENDENCIES
const express = require('express')
const mongoose = require ('mongoose')
const app = express ()
const db = mongoose.connection
require('dotenv').config()
const Stock = require('./controllers/stock.js')
const Recommendation = require('./controllers/recommendation.js')
const cors = require('cors')
const request = require('request')


// ENV VARIABLES
const PORT = process.env.PORT || 3003
const API_KEY = process.env.API_KEY


// DATABASE
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI)
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))


// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


// CRUD ROUTES
app.get('/' , (req, res) => {
  res.send('Hello World!')
})

app.post('/stocks/seed', (req, res) => {
  Stock.create(seedData, (error, createdSeedData) => {
      res.json(createdSeedData)
  })
})

app.post('/stocks', (req, res) => {
  Stock.create(req.body, (error, createdStock) => {
      res.json(createdStock)
  })
})

app.get('/stocks', (req, res) => {
  Stock.find({}, (error, foundStocks) => {
      res.json(foundStocks)
  })
})

app.get('/recommendations', (req, res) => {
  Recommendation.find({}, (error, foundRecommendations) => {
      res.json(foundRecommendations)
  })
})

app.put('/stocks/:id', (req, res) => {
  Stock.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedStock) => {
      res.json(updatedStock)
  })
})

app.delete('/stocks/:id', (req, res) => {
  Stock.findByIdAndRemove(req.params.id, (error, deletedStock) => {
      res.json(deletedStock)
  })
})


// API ROUTES
app.get('/api/one/:id', (req, res) => {
  request(`https://api.polygon.io/v3/reference/tickers?ticker=${req.params.id}&active=true&sort=ticker&order=asc&limit=10&apiKey=${API_KEY}`, (error, body) => {
    res.json(body)
  })
})

app.get('/api/two/:id', (req, res) => {
  request(`https://api.polygon.io/v2/aggs/ticker/${req.params.id}/prev?adjusted=true&apiKey=${API_KEY}`, (error, body) => {
    res.json(body)
  })
})


// LISTENER
app.listen(PORT, () => console.log( 'Listening on port:', PORT));