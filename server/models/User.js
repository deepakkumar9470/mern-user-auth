const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    firstName  : {
        type: String,
        required: true
    },
    lastName  : {
        type: String,
        required: true
    },
    email  : {
        type: String,
        required: [true, 'Please enter email'],
        unique :true,
        lowercase : true,
    },
    password  : {
        type: String,
        required: [true, 'Please enter a valid password'],
        
    },
   
},{timestamps : true})



UserSchema.methods.matchPassword =  async function(userPassword){
    return await bcrypt.compare(userPassword,this.password)
}


module.exports = mongoose.model('User', UserSchema)
