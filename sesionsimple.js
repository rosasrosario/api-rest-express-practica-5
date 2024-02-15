const express = require('express')
const session = require('express-session')
const port = 3500
const app = express()

app.get('/', (req, res) => {
    let veces=0
    res.send(`Ruta visitada ${veces} veces`)
    veces++//variable que no va a funcionar y nunca se actualizará
})


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto`,port)
})