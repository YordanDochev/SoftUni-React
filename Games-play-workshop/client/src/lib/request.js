export const request = async (method,url,data) => {
    const response = await fetch(url,{
        method
    })

    const result = response.json();
    return result
}