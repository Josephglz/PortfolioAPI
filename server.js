const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
require('dotenv').config()
const db = require('./database/controller')
const sesion = require('./extras/sessions')

/**
 * SERVER CONFIGURATION
 */
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'))
hbs.registerPartials(path.join(__dirname, './views/partials'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '100mb' }))
app.use(sesion)
require('./extras/helpers')

app.use(express.static(path.join(__dirname, './assets')))
app.use(require('./routes/index'))

const port = process.env.PORT || 3000

/**
 * SERVER INITIALIZATION
 */

app.listen(port, () => {
    console.log(`[SERVER]: Starting server...`)
})
.on('listening', () => {
    console.log(`[SERVER]: Server started on ${port}`)
    console.log(`[SERVER]: Live on ${process.env.APP_URL}`)
})
.on('error', (err) => {
    console.log(`[SERVER]: Error trying to start the server on ${port}.`)
    console.log(err)
})
.on('close', () => {
    console.log(`[SERVER]: The server was closed.`)
})