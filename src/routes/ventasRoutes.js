const express = require('express');
const {
    crearVenta,
    obtenerVentas,
    actualizarVenta,
    anularVenta
} = require('../controllers/ventasController');

const router = express.Router();

router.post('/', crearVenta);


router.get('/', obtenerVentas);


router.put('/:id', actualizarVenta);


router.patch('/:id/anular', anularVenta);

module.exports = router;
