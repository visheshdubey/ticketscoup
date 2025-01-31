import 'jsonwebtoken';

declare module 'jsonwebtoken' {
    interface JWTPayload {
        email: string;
    }
}
