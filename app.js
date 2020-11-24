const express = require('express')
const app = express()
const homeRoute = require('./routes/home.js')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/nodejsCRUD', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(err => console.log(err))

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extender: true }))
app.use(bodyParser.json())


app.use('/home', homeRoute)
app.use('/', homeRoute)


app.listen(port, () => {
    console.log(`your web is running on ${port}`)
})