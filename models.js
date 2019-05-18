const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')

const db = new Sequelize({
    database: 'localtureDb',
    dialect: 'postgres'
  })

const AuthUser = localtureDb.define('authuser', {
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

const City = localtureDb.define('city', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Country: {
      type: Sequelize.STRING,
      allowNull: false
    },
  })

   const  Message = pawDb.define('adopters', {
    first: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
})




// Pet.belongsToMany(Volunteer, {
//     through: 'pets_to_vol_xref',
//     foreignKey: 'animal_id'});
// Volunteer.belongsTo(Pet);



// Adopter.belongsToMany(Pet, {
//     through: 'adopt_to_pets_xref',
//     foreignKey: 'adopt_id'});


// AuthUser.beforeCreate(async (user,options) => {
//     const hashedPassword = await bcrypt.hash(user.password, 12);
//     user.password = hashedPassword;
//   })


  module.exports = {
 
  }
