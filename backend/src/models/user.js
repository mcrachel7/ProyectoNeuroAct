const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs');

const { Schema } = mongoose; 
//user schema
const userSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    email: String,
    password: String,
});

userSchema.methods.encryptPassword = async (password) =>{
const salt = await bcrypt.genSalt(10);
 return bcrypt.hash(password, salt); 
}; 

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

module.exports = mongoose.model('users', userSchema);