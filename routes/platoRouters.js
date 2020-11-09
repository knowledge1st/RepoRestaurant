const express = require('express');
const router = express.Router();

router.get('/', ( req, res, next ) => {
    res.status(201).json({msg: "Acá llamo al controller de platos"});
})

module.exports=router;