const {check} = require('express-validator')

module.exports = [
    check('hotel')
        .notEmpty().withMessage('Es obligatorio agregar el hotel'),
    check('stay')
        .notEmpty().withMessage('Es obligatorio agregar la estadia'),
    check('passengers')
        .notEmpty().withMessage('Debe indicar la cantidad de pasajeros'),
    check('price')
        .notEmpty().withMessage('Debes indicar el precio'),
        check('agency')
        .notEmpty().withMessage('La agencia es requerida'),
]
