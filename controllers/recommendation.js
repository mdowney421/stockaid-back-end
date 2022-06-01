const mongoose = require('mongoose')

const recommendationSchema = new mongoose.Schema({
    ticker: String
})

const Recommendations = mongoose.model('Recommendation', recommendationSchema)

module.exports = Recommendations