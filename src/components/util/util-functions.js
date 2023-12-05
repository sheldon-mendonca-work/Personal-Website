export const copyToClipboard = async (string) =>{
    try {
        const response = await navigator.clipboard.writeText(string);
        console.log(response);
        return true;
    } catch (error) {
        return false;
    }
}