/**
 * A sequence used for caching
 */
let fibs: number[] = [1, 1]

/**
 * Creates a list of fibonachi numbers using recursion.
 */
export function fibList(length: number): number[] {
    if ( fibs.length >= length ) {
        return fibs.slice(0, length)
    }
    
    const list = fibList(length - 1)
    const f =  [...list, (list[length -3] + list[length - 2])]
    
    if ( f.length > fibs.length ) {
        // Update the cache
        fibs = f
    }
    return f
}


/**
 * Calculates a fibonachi number. Starts at 1.
 */
export function fib(n: number): number {
    if ( n < 0 ) {
        return 1
    }
    if ( fibs.length > n ) {
        return fibs[n]
    }
    return fibList(n + 1)[n]
}
