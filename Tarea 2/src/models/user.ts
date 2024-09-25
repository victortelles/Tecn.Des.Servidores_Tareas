const { Schema, model, SchemaTypes } = require('mongoose');

//Esqueleto del modelo de mongoDB usuario.
const schema = new Schema({
    firstName: { type: SchemaTypes.String, required: true },
    lastName: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, required: true },
    password: { type: SchemaTypes.String, required: true },
    role: { type: SchemaTypes.String, default: 'user' },
    status: { type: SchemaTypes.String, default: 'active' } // new, active, blocked, deleted
});

//Exportamos el modelo de usuario.
const user = model('user', schema);
//Exportacion
export default user;