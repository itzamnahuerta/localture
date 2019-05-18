const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')

const localtureDb = new Sequelize({
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
    },
    home_area:{
        type: Sequelize.STRING,
        allowNull: false
    }
  })



const City = localtureDb.define('city', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

   const Message = localtureDb.define('adopters', {
    message: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

AuthUser.belongsToMany(City, {through: 'user_trip_xref', foreignKey: 'City_id'}) 

City.belongsToMany(AuthUser, {through: 'user_trip_xref', foreignKey: 'AuthUser_id'})


AuthUser.beforeCreate(async (user,options) => {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
  })

  

  module.exports = {
    localtureDb,
    AuthUser,
    City,
    Message
  }
