const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const multer = require('multer')
const compression = require('compression')

const app = express()

app.use(compression())

require('dotenv').config()
console.log(process.env.NODE_ENV)

const clientes = require('./routes/clientes')
// const blogs = require('./routes/blogs');
const propiedades = require('./routes/propiedades');
const auth = require('./routes/auth')
// const dashboard = require('./routes/dashboard')

//configuraciones
const storage = multer.diskStorage({
	destination: path.join(__dirname, '../public/uploads'),
	filename: (req, file, cb) => {
		cb(null, new Date().getTime() + path.extname(file.originalname))
	}
})

app.set('port', process.env.PORT || 4000)
app.use(express.static(path.join(__dirname, '../build')))

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))
app.use(multer({ storage }).any())

//Base de Datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
	.then(db => console.log(`Base de datos en linea`))
	.catch(err => console.log(err))

//Rutas
app.use(clientes)
// app.use(blogs)
app.use(propiedades)
app.use(auth)
// app.use(dashboard)

app.get('/propiedades',  (req, res) => {
	res.redirect('https://tuhogaraunclic.com')
})

app.listen(app.get('port'), () => {
	console.log(`Servidor en el puerto ${app.get('port')}`)
})

module.exports = app
