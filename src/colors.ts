/**
 * Updating the colors of the document using css variables is decidedly easy, simply specify
 * the color name in camelcase and the color value.
 */
export function setColors(args: { [x: string]: any }): void {
    for ( let key in args ) {
        const name = '--' + key.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1-$2").toLowerCase()
        document.documentElement.style.setProperty(name, args[key])
    }
}
