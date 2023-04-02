const express = require('express')
const cors = require('cors')

const app = express()
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(cors())

const products_router = require('./routes/pirates')


app.use(products_router)

app.listen(8000, function () {
    console.log("Servidor ejecutando en el puerto 8000")
})