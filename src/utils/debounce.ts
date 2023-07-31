export function debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number,
    immediate?: boolean
): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout!);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}
