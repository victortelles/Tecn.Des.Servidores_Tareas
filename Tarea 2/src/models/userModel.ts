import { Schema, model, } from 'mongoose';
import { IUser } from '../types/user';

//Esqueleto del modelo de mongoDB usuario.
const userSchema = new Schema<IUser> ({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    status: { type: String, default: 'active' } // new, active, blocked, deleted
});

//Exportacion
const User = model<IUser>('User', userSchema);
export default User;