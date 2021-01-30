const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')

const app = express()

const clientes = require('./routes/clientes')
const blogs = require('./routes/blogs');

//configuraciones
require('dotenv').config()
app.set('port', process.env.PORT || 4000)
app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

//Base de Datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
	.then(db => console.log(`Base de datos en linea ${db}`))
	.catch(err => console.log(err))

//Rutas
app.use(clientes)
app.use(blogs)

app.listen(app.get('port'), () => {
	console.log(`Servidor en el puerto ${app.get('port')}`)
})

module.exports = app
