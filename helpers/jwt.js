const { expressjwt: jwt } = require("express-jwt");

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return jwt({
        secret,
        algorithms: ['HS256'],
        credentialsRequired: false,
        isRevoked: isRevoked
    }).unless({
        path: [
            { url: /\/public\/uploads(.*)/ , methods: ['GET', 'OPTIONS'] },
            { url: /\/v1\/products(.*)/ , methods: ['GET', 'OPTIONS'] },
            { url: /\/v1\/categories(.*)/ , methods: ['GET', 'OPTIONS'] },
            `${api}/users/login`,
            `${api}/users/register`
        ]
    })
}

async function isRevoked(req, token){
    if(!token.payload.isAdmin) {
        return true;
    } 
} 

module.exports = authJwt;