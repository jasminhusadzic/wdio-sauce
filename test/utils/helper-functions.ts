export const convertToPath = (text: string) => {
    return text.replace(/\W+/g, " ").toLowerCase().split(' ').join('-');
}

export const getNumberFromString = async (text: string) => {
    return text.replace(/^\D+/g, '');
}