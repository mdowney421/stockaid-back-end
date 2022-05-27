const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    symbol: String,
    shortName: String,
    marketPrice: Number,
    marketChange: Number
})

const Stocks = mongoose.model('Stock', stockSchema)

module.exports = Stocks