const platosRepository = require('../models/Plato');
const db = require('../config/db')

exports.getPlatos=(req,res)=>{
    
    db.connection.execute(
        'SELECT * FROM platos WHERE `nombre` = ? AND `precio` < ?',
        ['papas', 200],
        function(err, results, fields) {
        console.log(results); 
        console.log(fields);
        }
    );

    res.status(200).json(platosRepository.plato);
}

exports.getPlato = (req, res) => {
    const body = req.body;
    const id=body.id;
    res.status(200).json(platosRepository.getPlato(id));
}

exports.changePlatoPrice = (req,res) =>{
    const body = req.body;
    const id=body.id;
    //const id=body.new_price;
    const result = platosRepository.changePlatoPrice(id,new_price);
    if (result){
        res.status(200).json({message:"El plato cambio de categoria correctamente."});
    }
    else{
        res.status(403).json({message:"El plato no cambio de categoria."});
    }
}

exports.changePlatoCategory = (req,res) =>{
    const body = req.body;
    const id=body.id;
    //const id=body.new_cat;
    const result = platosRepository.changePlatoCategory(id,new_cat);
    if (result){
        res.status(200).json({message:"El plato cambio de categoria correctamente."});
    }
    else{
        res.status(403).json({message:"El plato no cambio de categoria."});
    }
}

exports.deletePlato=(req,res) =>{
    const body = req.body;
    const id=body.id;
    const result =platosRepository.deletePlato(id);
    if (result){
        res.status(200).json({message:"El plato fue borrado correctamente."});
    }
    else{
        res.status(403).json({message:"El plato no se pudo borrar."});
    }
}