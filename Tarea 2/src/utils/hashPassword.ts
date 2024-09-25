import bcrypt from 'bcrypt';

// Funcion para hashear la constraseñas
export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};
