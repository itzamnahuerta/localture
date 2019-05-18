const express = require('express');
const cityRoute = express.Router();

const { City } = require('../models');


cityRoute.get('/', async (req, res) => {
  try {
    const allCities = await City.findAll();
    res.send(allCities);
  } catch (e) {
    console.log(e.message);
  }
});


cityRoute.post('/', async (req, res) => {
  try {
    const postedCity = await City.create(req.body);
    res.send(postedCity);
  } catch (e) {
    console.log(e.message);
  }
});


cityRoute.get('/:id', async (req, res) => {
  try {
    const selectedCity = await City.findByPk(req.params.id);
    res.send(selectedCity);
  } catch (e) {
    console.log(e.message);
  }
});



cityRoute.put('/:id', async (req, res) => {
  console.log('in petRouter')
  try {
    const id = req.params.id;
    const selectedCity = await City.findByPk(id);
    if (grabbedPet) await selectedCity.update(req.body);
    res.json({
      selectedCity
    });
  } catch(e) {
    res.status(304).json({
      message: e.message
    });
    }
  })

// delete particular pet
cityRoute.delete('/:id', async (req, res) => {
  try {
    const deletecity = await City.findByPk(req.params.id);
    await deleteCity.destroy();
    res.send(`deleted ${deleteCity}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { cityRoute };