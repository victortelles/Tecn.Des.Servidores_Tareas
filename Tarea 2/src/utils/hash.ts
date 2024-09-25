import bcrypt from 'bcryptjs';

// Funcion para encriptar las constraseñas
export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

//Funcion para comparacion de contraseñas
export const comparePassword = async(password: string, hashPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashPassword);
};