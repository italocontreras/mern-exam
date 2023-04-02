const express = require('express')
const {Pirate} = require('../models/pirates')
const router = express.Router()

router.get('/pirates', async (req, res) => {
    try {
        const pirates = await Pirate.find()
        res.json(pirates)
    } catch(error) {
        console.log(error);
    }
})



router.post('/pirates/new', async (req, res) => {
    try {
        const new_pirate = await Pirate.create({
            ...req.body
        })
        res.json(new_pirate)
    } catch(error) {
        console.log(error);
    }
})

router.get('/pirates/:id', async (req, res) => {
    const id = req.params.id
    try {
        const pirate = await Pirate.findOne({_id: id})
        return res.json(pirate)
    } catch(error) {
        console.log(error)
        return res.json({error}, 404)
    }
})


router.put('/pirates/update/:id', async (req, res) => {

    const id = req.params.id  
    const pirate = await Pirate.updateOne(
        {_id: id},
        { ...req.body }
    )
    return res.json({})
})


router.delete('/pirates/:id', async (req, res) => {
    const id = req.params.id
    await Pirate.deleteOne({_id: id})
    res.json({eliminado: 'ok'})
})
  

module.exports = router
