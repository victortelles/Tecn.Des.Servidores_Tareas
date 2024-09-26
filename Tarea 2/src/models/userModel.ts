import { Schema, model, } from 'mongoose';
import { IUser } from '../types/user';

interface UserDocument extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string
    status: string;
}

//Esqueleto del modelo de mongoDB usuario.
const userSchema = new Schema<UserDocument> ({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    status: { type: String, default: 'active' } // new, active, blocked, deleted
});

//Exportacion
const User = model<UserDocument>('User', userSchema);
export default User;