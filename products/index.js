const app = require('express')();

app.get('/products', (req, res) => res.send('Hola Products, API with MySQL!'));

app.listen(3006, () => console.log(`Products API en puerto 3006!`));