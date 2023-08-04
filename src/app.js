const express = require('express')


//initializations express
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false })) //body formulario



app.use(require('./routes/index.routes'))

//settings
//indicarle al sistema que vamos a usar el puerto ya definido en la variable port si no que use el 4000
app.set('port', process.env.PORT || 4000)



module.exports = app