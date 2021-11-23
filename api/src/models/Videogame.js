const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
     
      },       
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "field is required" },
      },
    },
    description:{
      type: DataTypes.TEXT,
      allowNull:false,
      validate: {
        notNull: { msg: "field is required" },
      },
    },
    released:{
      type:DataTypes.STRING, 
      allowNull:false,
      validate: {
        notNull: { msg: "field is required" },
      }, 
    },
    rating:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notNull: { msg: "field is required" },
      },
    },
    background_image:{
      type:DataTypes.TEXT,
    }
  },{timestamps:false});
};
