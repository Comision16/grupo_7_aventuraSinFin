const {validationResult} = require('express-validator');
const db = require('../../database/models')

module.exports = async(req, res) => {
    const errors = validationResult(req);

    if(errors.isEmpty()){
    const {hotel,stay,passengers,wifi,breakfast,parking,checkInWeb,price,agency} = req.body
    const newHotel = await db.Hotel.update(
      {
        productId : hotel,
        stay : stay.trim(),
        passengers,
        wifi : wifi ? true : false,
        breakfast : breakfast ? true : false,
        parking : parking ? true : false,
        checkInWeb : checkInWeb ? true : false,
        price: +price,
        agencyId : agency,
      },
      {
        where : {
          id : req.params.id
        }
      }
    );

    if(req.files.length){

      await db.Image.destroy({
        where : {
          hotelId : req.params.id
        }
      })

        const images = req.files.map((file) => {
            return {
              name : file.filename,
              hotelId : newHotel.id,
            }
        });

        await db.Image.bulkCreate(images, {
            validate : true
          })
    }

    return res.redirect('/dashboard')

    }else{
        const hotels = db.Product.findAll({
            where : {
              lodging : true,
            },
            order : [['name', 'ASC']]
          });
      
          const countries = db.Countrie.findAll({
            order : ['name']
          });
      
          const agencies = db.Agency.findAll({
            order : ['name']
          });
      
          Promise.all([hotels, countries, agencies])
            .then(([hotels, countries, agencies]) => {
              return res.render("productEditAlojamiento", {
                hotels,
                countries, 
                agencies,
                errors : errors.mapped(),
                old : req.body
              });
            })
            .catch(error => console.log(error))
    } 
    }