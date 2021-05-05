const express = require("express")
const router = new express.Router()
const MensRanking = require('../models/mens')



// handle POST request
router.post('/mens', async (req, res) => {
    try {
      const addingMensRecord = new MensRanking(req.body);
      console.log(req.body);
      const insertMens = await addingMensRecord.save();
      res.status(201).send(insertMens);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // handle GET request
  router.get('/mens', async (req, res) => {
    try {
      const getMens = await MensRanking.find({}).sort({ ranking: 1 });
      res.status(201).send(getMens);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // handle GET request of indivisual
  router.get('/mens/:id', async (req, res) => {
    try {
      const _id = req.params.id;
      const getMen = await MensRanking.findById({ _id });
      res.status(201).send(getMen);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // handle PATCH request of indivisual
  router.patch('/mens/:id', async (req, res) => {
    try {
      const _id = req.params.id;
      const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
        new: true
      });
      res.send(getMen);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // handle DELETE request of indivisual
  router.delete('/mens/:id', async (req, res) => {
    try {
      const getMen = await MensRanking.findByIdAndDelete(req.params.id);
      res.send(getMen);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  module.exports = router