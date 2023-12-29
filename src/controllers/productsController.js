module.exports = {
  
  /* destinos */
  add: require('./products/add'),
  create: require('./products/create'),
  detail: require('./products/detail'),
  edit: require('./products/edit'),
  update : require('./products/update'),
  remove : require('./products/remove'),

  /* vuelos */
  addFlight: require('./products/addFlight'),
  createFlight : require('./products/createFlight'),

  /* hoteles */
  addHotel: require('./products/addAddHotel'),
  createHotel: require('./products/createHotel'),
  detailHotel : require('./products/detailHotel'),
  editHotel: require('./products/editHotel'),
  updateHotel : require('./products/updateHotel'),
  removeHotel : require('./products/removeHotel'),

  /* alojamientos */
  addAlojamiento: require('./products/addAlojamiento'),
  createAlojamiento : require('./products/createAlojamiento'),
  editAlojamiento : require('./products/editAlojamiento'),

  
  /* paquetes */
  addPaquete: require('./products/addPaquete'),
  createPaquete: require('./products/createPaquete'),
  editPaquete: require('./products/editPaquete'),
  updatePaquete : require('./products/updatePaquete'),
  
  filter: require('./products/filter')
};
