const {check} = require('express-validator')

module.exports = [
    check('countrie')
        .notEmpty().withMessage('Es obligatorio agregar el lugar'),
    check('hotel')
        .notEmpty().withMessage('Es obligatorio agregar el hotel'),
    check('categorie')
        .notEmpty().withMessage('Es obligatorio agregar la categoria'),
    check('flight')
        .notEmpty().withMessage('Es obligatorio agregar el vuelo'),
    check('description')
        .notEmpty().withMessage('La desscripción es requerida').bail()
        .isLength({
            min: 20,
            max: 300
        }).withMessage('La descripción debe tener entre 20 y 300 caracteres'),
    check('price')
        .notEmpty().withMessage('Debes indicar el precio').bail()
        .isDecimal().withMessage('El precio debe ser un número'),
    check('images')
        .custom((value, {req}) =>{
            if(req.file){
                return true
            }
            return false
        }).withMessage('No has subido ninguna imagen')
]
