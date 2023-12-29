const {validationResult} = require('express-validator');
const db = require('../../database/models')

module.exports = async(req, res) => {
  const hotels = db.Product.findAll({
    where : {
      lodging : true,
    },
    order : [['name', 'ASC']] //Ordeno por productId de forma ascendente
  });

  const countries = db.Countrie.findAll({
    order : ['name']
  });

  const agencies = db.Agency.findAll({
    order : ['name']
  });

  const hotel = db.Hotel.findByPk(req.params.id,{
    include : ['images']
  })

  Promise.all([hotels, countries, agencies,hotel])
    .then(([hotels, countries, agencies,hotel]) => {
      return res.render("productEditAlojamiento", {
        hotels,
        countries, 
        agencies,
        ...hotel.dataValues
      });
    })
    .catch(error => console.log(error))
    }