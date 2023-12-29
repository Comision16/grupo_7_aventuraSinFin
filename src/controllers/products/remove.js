const { existsSync, unlinkSync } = require("fs");
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const id = req.params.id;

    const productToDelete = await db.Product.findByPk(id);

    if(productToDelete){

      // Buscar y eliminar registros en la tabla hija (flights) relacionados con el producto
      await db.Flight.destroy({ where: { productId: id } });

      
      // Eliminar la imagen del producto, si existe
        existsSync(`./public/images/${productToDelete.image}`) &&
        unlinkSync(`./public/images/${productToDelete.image}`);
        // Finalmente, eliminar el producto
        await productToDelete.destroy();
        
        return res.redirect("/dashboard");
    }
   
  } catch (error) {
    console.log(error);
  }
};
