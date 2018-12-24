// Server setup
const express = require('express')
const app = express()
const request = require('request')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/weatherDB', {
    useNewUrlParser: true
})

app.use('/', api)

const port = 6666
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})