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

   const  = pawDb.define('adopters', {
    first: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob:{
        type: Sequelize.STRING,
        allowNull: false
    },
    license: {
        type: Sequelize.STRING,
        allowNull: true
    },
    rent_own:{
        type: Sequelize.STRING,
        allowNull: false
    },
    num_pets:{
        type: Sequelize.STRING,
        allowNull: false
    },
    num_children:{
        type: Sequelize.STRING,
        allowNull: false
    },
    allergies:{
        type: Sequelize.STRING,
        allowNull: false
    },
    vet:{
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    } ,
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city:{
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allownull: false
    },
    zip: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    house_size: {
        type: Sequelize.STRING,
        allowNull: false
    },
    animal_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

const Volunteer = pawDb.define('volunteers', {
    name: {
        type:Sequelize.STRING,
        allowNull: false
       },
    email: {
        type: Sequelize.STRING,
        allowNull: false
       },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
       },
    num_animals: {
        type: Sequelize.STRING,
        allowNull: true
       },
    preference: {
        type:Sequelize.STRING,
        allowNull: true
    },
    additional_info: {
        type: Sequelize.STRING,
        allowNull: true
    }
   })


Pet.belongsToMany(Volunteer, {
    through: 'pets_to_vol_xref',
    foreignKey: 'animal_id'});
Volunteer.belongsTo(Pet);



Adopter.belongsToMany(Pet, {
    through: 'adopt_to_pets_xref',
    foreignKey: 'adopt_id'});


AuthUser.beforeCreate(async (user,options) => {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
  })


  module.exports = {
    pawDb,
    AuthUser,
    Pet,
    Adopter,
    Volunteer
  }
