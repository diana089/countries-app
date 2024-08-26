export const fetchContries = async () => {
    const url = 'https://restcountries.com/v3.1/all';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json();
        
    } catch (error: any) {
        return error.message;
    }
}
