/**
 * Created by jonassimonsen on 05/04/2016.
 */
module.exports.jwtConfig = {
    secret: "ChangMeToARealSecretOurIWillBeHacked",
    tokenExpirationTime : 60*20, //seconds
    audience: "yoursite.net",
    issuer: "yourcompany@somewhere.com"
}