const { Schema, model } = require('mongoose');

//Esqueleto del modelo de mongoDB usuario.
const UserSchema = new Schema({
    firstName: { type: String , required: true },
    lastName: { type: String , required: true },
    email: { type: String , required: true, unique: true },
    password: { type: String , required: true },
    role: { type: String , default: 'user' },
    status: { type: String , default: 'active' } // new, active, blocked, deleted
});

//Exportacion
export default model('User', UserSchema);