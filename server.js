const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '100mb' }))

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`[SERVER]: Starting server ${port}`)
})
.on('listening', () => {
    console.log(`[SERVER]: Server started ${port}.`)
})
.on('error', (err) => {
    console.log(`[SERVER]: Error trying to start the server on ${port}.`)
    console.log(err)
})
.on('close', () => {
    console.log(`[SERVER]: The server was closed.`)
})