const express = require('express');
const messageRoute = express.Router();

const { Message } = require('../models');


messageRoute.get('/', async (req, res) => {
  try {
    const allMessages = await Message.findAll();
    res.send(allMessages);
  } catch (e) {
    console.log(e.message);
  }
});


messageRoute.post('/', async (req, res) => {
  try {
    const postedMessage = await Message.create(req.body);
    res.send(postedMessage);
  } catch (e) {
    console.log(e.message);
  }
});


messageRoute.get('/:id', async (req, res) => {
  try {
    const selectedMessage = await Message.findByPk(req.params.id);
    res.send(selectedMessage);
  } catch (e) {
    console.log(e.message);
  }
});



messageRoute.put('/:id', async (req, res) => {
  console.log('in petRouter')
  try {
    const id = req.params.id;
    const selectedMessage = await Message.findByPk(id);
    if (grabbedPet) await selectedMessage.update(req.body);
    res.json({
      selectedMessage
    });
  } catch(e) {
    res.status(304).json({
      message: e.message
    });
    }
  })

// delete particular pet
messageRoute.delete('/:id', async (req, res) => {
  try {
    const deleteMessage = await Message.findByPk(req.params.id);
    await deleteMessage.destroy();
    res.send(`deleted ${deleteIt}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { messageRoute };