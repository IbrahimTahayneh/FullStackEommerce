export { }

declare global {
    namespace Express {
        export interface Request {
            userId?: String,
            cleanBody?: any
        }
    }
}