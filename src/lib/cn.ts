/**
 * A simple utility that handles the creation of classNames
 */
export function cn(...args: any[]): string {
    return args.map((arg: any) => {
        if ( typeof arg == 'string' ) {
            return arg
        }
        if ( Array.isArray(arg) ) {
            return arg.join(' ')
        }
        if ( typeof arg == 'object' ) {
            let classes = []
            for (let key in arg) {
                if ( arg[key] ) {
                    classes.push(key)
                }
            }
            return classes.join(' ')
        }
    }).join(' ')
}
