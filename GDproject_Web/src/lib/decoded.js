import jwt from 'jsonwebtoken';
import secretObjA from '../lib/jwtAuth';

export const decoded = (token) => {
    return jwt.verify(token, secretObjA.secret);
}