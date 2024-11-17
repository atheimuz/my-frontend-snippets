const code = `export const validateEmail: boolean = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};`;

export default code;
