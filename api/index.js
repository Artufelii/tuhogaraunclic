const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')

const app = express()

const clientes = require('./routes/clientes')
const blogs = require('./routes/blogs');
const propiedades = require('./routes/propiedades');
const auth = require('./routes/auth')
const dashboard = require('./routes/dashboard')

//configuraciones
require('dotenv').config()
app.set('port', process.env.PORT || 4001)
app.use(express.static(path.join(__dirname, '../build')))

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

//Base de Datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
	.then(db => console.log(`Base de datos en linea`))
	.catch(err => console.log(err))

//Rutas
app.use(clientes)
app.use(blogs)
app.use(propiedades)
app.use(auth)
app.use(dashboard)

app.listen(app.get('port'), () => {
	console.log(`Servidor en el puerto ${app.get('port')}`)
})

module.exports = app
