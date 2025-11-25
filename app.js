
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true})) //esto es para que el servidor pueda leer los datos del formulario

let datos = [];

app.get('/', (req, res) => {
    // res.send('Probando ruta en el navegador!') //
    res.sendFile(__dirname + '/formularios.html') //esto ejecuta el html en el servidor
})
app.post('/insert', (req, res) => {
    datos.push(req.body)
    console.log(datos);
    // res.send('Datos recibidos'+ JSON.stringify(datos))
    res.redirect('/mostrar')
})

app.get('/mostrar', (req, res) => {
    let html = `<table border="1" <tr><th>nombre</th><th>email</th><th>edad</th></tr>`
    datos.forEach((dato) => {
        html += `<tr><td>${dato.nombre}</td><td>${dato.email}</td><td>${dato.edad}</td></tr>`;
    })
    html += `</table>`;
    res.send(html)
})
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})