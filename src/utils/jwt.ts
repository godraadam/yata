import jwt from 'jsonwebtoken'

const JWT_SIGNING_SECRET = process.env.JWT_SIGNING_SECRET || 'changeme'

export function signJwt(data: object) {
    return jwt.sign(data, JWT_SIGNING_SECRET);
}

export function verifyJwt<T>(token: string) {
    return jwt.verify(token, JWT_SIGNING_SECRET) as T;
}