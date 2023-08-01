export function addLeadingZeros(number: string) {
    const desiredLength = 3;
    const paddedNumber = number.toString().padStart(desiredLength, '0');
    return paddedNumber;
}

export function firstUpper(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}