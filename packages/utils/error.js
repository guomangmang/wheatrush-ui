
class WheatrushError extends Error {
    constructor(m) {
        super(m)
        this.name = 'WheatrushError'
    }
}
export function throwError(scope, m) {
    throw new WheatrushError(`[${scope}] ${m}`)
}