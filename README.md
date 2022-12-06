# Como ejecutar Microservicios Nodejs Docker

Verifique que tenga instalado Docker y ejecutando.

Ubiquese dentro de la raiz del proyecto (Donde se encuentran el archivo docker-compose.yml )

Ejecute en la terminal:
```
docker-compose up
```

Ahora el servidor se está ejecutando en http://localhost:3007

### Para borrar los contenedores

Ejecute en la terminal:
```
docker-compose down
```

**Nota:** Si desea ejecutar el servidor sin Docker, en api-gateway/index.js:
Remplace
```
app.use('/orders', createProxyMiddleware({ target: 'http://host.docker.internal:3005', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://host.docker.internal:3006', changeOrigin: true }));
```
por
```
app.use('/orders', createProxyMiddleware({ target: 'http://localhost:3005', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://localhost:3006', changeOrigin: true }));
```