const express = require("express");
const bodyParser = require('body-parser')
const url = require('url')
const app = express()
const path = require('path');
const port = 3000;

app.get('/fibonacci', (req, res) => {
    var numeroCedula = parseInt(req.query.cedula);

    const fibo = {
        get laSecuenciaEs() {

            var secuencias = [];
            var a = 0;
            var b = 1;
            var c = a + b;

            if (numeroCedula % 2 === 0) {
                for (let i = 0; i < 20; i++) {
                    c = a + b;
                    a = b;
                    b = c;
                    secuencias.push(c);
                }
                return secuencias;
            } else {
                for (let i = 0; i < 10; i++) {
                    c = a + b;
                    a = b;
                    b = c;
                    secuencias.push(c);
                }
                return secuencias;
            }
        }
    }
    JSON.parse(res.json(fibo));

})

app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`)
})