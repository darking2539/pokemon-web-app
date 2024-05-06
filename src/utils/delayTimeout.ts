export function delayTimeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}