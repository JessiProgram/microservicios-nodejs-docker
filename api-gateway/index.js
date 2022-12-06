const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3007;

app.use('/orders', createProxyMiddleware({ target: 'http://host.docker.internal:3005', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://host.docker.internal:3006', changeOrigin: true }));
app.get('/', (req, res) => res.send('Hola Gateway API'));

app.listen(port, () => console.log(`App de ejemplo en el puerto ${port}!`));