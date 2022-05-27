// DEPENDENCIES
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Stock = require('./models/stock.js')
const cors = require('cors')
const seedData = require('./models/seed-data.js')

// CONNECTIONS
mongoose.connect('mongodb://localhost:27017/stockdata')
// mongoose.connect()
mongoose.connection.once('open', () => {
    console.log('connected to mongod...')
})


// MIDDLEWARE
app.use(express.json())
app.use(cors())


// RESTful CRUD ROUTES
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


// LISTEN
app.listen(3000, () => {
    console.log('listening...')
})