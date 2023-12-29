const express = require('express');
const { detail, add, addHotel, detailHotel, addPaquete , edit, create, update, remove, filter, createHotel, createPaquete, editPaquete, editHotel, updateHotel, updatePaquete, addAlojamiento, removeHotel, addFlight, createFlight, createAlojamiento, editAlojamiento } = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const productAddValidator = require('../validations/productAddValidator');
const productAddValidatorHotel = require('../validations/productAddValidatorHotel');
const productAddValidatorPaquete = require('../validations/productAddValidatorPaquete');
const productEditValidator = require('../validations/productEditValidator');
const productEditValidatorHotel = require('../validations/productEditValidatorHotel');
const productAddValidatorVuelo = require('../validations/productAddValidatorVuelo');
const productAddValidatorAlojamiento = require('../validations/productAddValidatorAlojamiento');

const router = express.Router();

router
    .get('/detail/:id', detail)
    .get('/detail/hotel/:id', detailHotel)
    
    /* destinos */
    .get('/add', add)
    .post('/add', upload.single('images'),productAddValidator,create)
    .get('/edit/:id',upload.single('images'), edit)
    .put('/update/:id', upload.single('images'),productEditValidator, update) // actualización
    .delete('/remove/:id', remove)

    /* vuelos */
    .get('/add/vuelos',addFlight)
    .post('/add/vuelos',productAddValidatorVuelo, createFlight)

    /* hoteles */
    .get('/add/hoteles', addHotel)
    .post('/add/hoteles', upload.single('images'),productAddValidatorHotel, createHotel)
    .get('/editHotel/:id',upload.single('images'), editHotel)
    .put('/updateHotel/:id', upload.single('images'), productEditValidatorHotel, updateHotel) // actualización
    .delete('/removeHotel/:id', removeHotel)

    /* alojamientos */
    .get('/add/alojamientos', addAlojamiento)
    .post('/add/alojamientos', upload.array("images"), productAddValidatorAlojamiento, createAlojamiento)
    .get('/editAlojamientos/:id', editAlojamiento)
    
    /* paquetes */
    .get('/add/paquetes', addPaquete)
    .post('/add/paquetes',upload.single('images'), productAddValidatorPaquete,createPaquete)
    .get('/editPaquete/:id',upload.single('images'), editPaquete)
     .put('/update/:id', upload.single('images'), updatePaquete) // actualización
    
    .get('/filter',filter)

module.exports = router;