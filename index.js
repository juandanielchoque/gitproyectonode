const express = require('express');
const app = express();
const port = 3000;

// Clientes de ejemplo
const clientes = [
    { id: 1, nombre: 'Juan Perez', email: 'jperez@example.com' },
    { id: 2, nombre: 'Ana Garcia', email: 'agarcia@example.com' },
    { id: 3, nombre: 'Carlos Rodriguez', email: 'crodriguez@example.com' }
];

// Productos de ejemplo
const productos = [
    { id: 1, nombre: 'Camiseta', precio: 15.99 },
    { id: 2, nombre: 'Pantalón', precio: 29.99 },
    { id: 3, nombre: 'Zapatillas', precio: 59.99 }
];

app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API!');
});

// Rutas para clientes
app.get('/clientes', (req, res) => {
    res.json(clientes);
});

app.post('/clientes', (req, res) => {
    const nuevoCliente = req.body;
    nuevoCliente.id = clientes.length + 1;
    clientes.push(nuevoCliente);
    res.json(nuevoCliente);
});

app.put('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const clienteActualizado = req.body;
    const index = clientes.findIndex(c => c.id === id);
    if (index !== -1) {
        clientes[index] = clienteActualizado;
        res.json(clienteActualizado);
    } else {
        res.status(404).send('Cliente no encontrado');
    }
});

app.delete('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = clientes.findIndex(c => c.id === id);
    if (index !== -1) {
        clientes.splice(index, 1);
        res.send('Cliente eliminado');
    } else {
        res.status(404).send('Cliente no encontrado');
    }
});

// Rutas para productos (similar a las rutas de clientes)
// ...

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});