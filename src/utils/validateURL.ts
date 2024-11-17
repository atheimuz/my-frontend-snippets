const code = `export const isValidURL: boolean = (url: string) => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};`;

export default code;
