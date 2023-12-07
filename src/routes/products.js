const express = require('express');
const { detail, add, addHotel , addPaquete , edit, create, update, remove, filter, createHotel } = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const productAddValidator = require('../validations/productAddValidator');

const router = express.Router();

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .get('/add/hoteles', addHotel)
    .post('/add/hoteles', upload.single('images'), createHotel)
    .get('/add/paquetes', addPaquete)
    .post('/add',productAddValidator, upload.single('images'),create)
    .get('/edit/:id', edit)
    .put('/update/:id', upload.single('images'), update) // actualización
    .delete('/remove/:id', remove)
    .get('/filter',filter)

module.exports = router;

// const express = require('express');
// const {detail, add, edit, create, update, remove, filter} = require('../controllers/productsController');
// const upload = require('../middlewares/upload');
// const productAddValidator = require('../validations/productAddValidator');

// const router = express.Router();

// /* /products */

// router
//     .get('/detail/:id', detail)
//     .get('/add', add)
//     .post('/add', upload.fields([
//       {
//         name: "image",
//       },
//       {
//         name: "images",
//       },
//     ]), productAddValidator, create)
//     .get('/edit/:id', edit)
//     .put('/update/:id', upload.fields([
//       {
//         name: "image",
//       },
//       {
//         name: "images",
//       },
//     ]),update)
//     .delete('/remove/:id',remove)
//     .get('/filter',filter)


// module.exports = router