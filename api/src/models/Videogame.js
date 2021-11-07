const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull:false
    },
    fecha_de_lanzamiento:{
      type:DataTypes.DATEONLY,
      allowNull:false,
    },
    rating:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    plataformas:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  });
};
