const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },

  motdepasse: {
    type: String,
    required: true,
  },
<<<<<<< HEAD

=======
>>>>>>> b0ac7e6206cc930cb6dee313c21bad1265c6fcca
  isAdmin:{
    type:Boolean,
    default:false,
    required:true,
  }
},{timestamps:true});

module.exports = User = mongoose.model("user", userSchema);
