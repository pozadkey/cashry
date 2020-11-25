const cashModel = require('../models/cashModel')

module.exports.addItem = async(req, res) =>{
    const {item, quantity, price} = req.body
    try {
        const store = await cashModel.create({item, quantity, price})
        res.status(201).json(store)
    }
    catch (err) {
        console.log(err);
        res.status(400).send(`error storing the item`)
    }
}

module.exports.updateItem = (req, res) =>{
    
}

module.exports.editItem = (req, res) =>{
    
}

module.exports.deleteItem = (req, res) =>{
    
}


