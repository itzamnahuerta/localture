const express = require('express');
const userRoute = express.Router();

const { AuthUser } = require('../models');

userRoute.get('/', async (req, res) => {
  try {
    const allUsers = await AuthUser.findAll();
    res.send(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});


// post new user
userRoute.post('/', async (req, res) => {
  try {
    const postedUser = await AuthUser.create(req.body);
    res.send(postedUser);
  } catch (e) {
    console.log(e.message);
  }
});

//find one user
userRoute.get('/:id', async (req, res) => {
  try {
    const leUser = await AuthUser.findByPk(req.params.id);
    res.send(leUser);
  } catch (e) {
    console.log(e.message);
  }
});

//update existing users
userRoute.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const grabbedUser = await AuthUser.findByPk(id);
    if (grabbedUser) await grabbedUser.update(req.body);
    res.json({
      grabbedUser
    });
  } catch(e) {
    res.status(304).json({
      message: e.message
    });
    }
  })
  

// delete particular user
userRoute.delete('/:id', async (req, res) => {
  try {
    const deleteIt = await AuthUser.findByPk(req.params.id);
    await deleteIt.destroy();
    res.send(`successfully deleted selection ${deleteIt}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { userRoute };
