const app = require('express')();

app.get('/orders', (req, res) => res.send('Hola Orders, API!'));

app.listen(3005, () => console.log(`Orders API en el puerto 3005!`));