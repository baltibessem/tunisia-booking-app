const mongoose = require('mongoose')


const museeSchema = new mongoose.Schema({

    nom: {
        type : String ,
        required : true ,
        unique : true,
    },

    region : {
        type : String , 
        required : true,
    } , 
    images  : [] ,
    description : {
        type : String , 
        required:true,
    },
    adresse : {
        type : String , 
        required : true , 
        unique : true , 
    },
    collectionDescription : [] , 
    collectionImage : [],

},{timestamps:true})

module.exports = Musee = mongoose.model("musees", museeSchema);
