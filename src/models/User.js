//modelo de coleccion por aparte
const { Schema, model } = require ('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema= new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
}, {
    timestamps: true
})

// cifrado del password
UserSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

// comparacion de cifrado
UserSchema.methods.matchPassword = function(password) {
    return await bcrypt.compare(password, this.password);
}


module.exports = model('User', UserSchema);  // hasta aqui esta el modelo del usuario