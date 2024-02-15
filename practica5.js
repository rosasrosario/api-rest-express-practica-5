const express = require('express');
const session = require('express-session');
const port = 3700;
const app = express();

app.use(session({
    user: 'admin',
    secret: '784rf8hes94k5=1ks',
    resave: false,
    saveUninitialized: true,
}));

app.use((req, res, next) => {
    next()
}

);

app.get('/', (req, res) => {
    res.send('Visita las paginas que tu quieras');
});
app.get('/query', (req, res) => {
    res.send('querys');
});
app.get('/ruta1', (req, res) => {
    res.send('Pagina de ruta1');
});

app.get('/ruta2', (req, res) => {
    res.send('Pagina de ruta2');
});
app.get('/ruta3', (req, res) => {
    res.send('Pagina de ruta3');
});

app.get('/ruta4', (req, res) => {
    res.send('Pagina de ruta4');
});
app.get('/historial', (req, res) => {
    let paginas = null
    res.send(`Páginas consultadas: ${paginas}`);
});

app.listen(port, () => {
    console.log(`Escuchando puerto `,port);
});