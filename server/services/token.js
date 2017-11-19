import { verify, sign } from 'jsonwebtoken';

const JWTsecret = 'a4vb8fUu9hEvXfX6szYawQU/b2OE4';
const expirationPeriod = '30d';

export async function getJWToken(user) {
    return sign(
        {
            id: user.id,
            name: user.name,
        },
        JWTsecret,
        {
            expiresIn: expirationPeriod,
        }
    );
}

export async function decodeJWToken(token) {
    return verify(token, JWTsecret);
}

export async function verifyJWToken(token) {
    try {
        const result = await verify(token, JWTsecret);

        if(result) {
            return true;
        }
    } catch (error) {
        return false;
    }
}

export async function extractIdFromToken(token) {
    const decodedData = await decodeJWToken(token);
    return decodedData.id;
}
