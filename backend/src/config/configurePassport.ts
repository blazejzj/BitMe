const cookieExtractor = require("./cookieExtractor");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const db = require("../db/prisma");

const options = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        cookieExtractor,
    ]),
};

function configurePassport(passport: any) {
    passport.use(
        new JwtStrategy(options),
        async function (jwt_payload: any, done: any) {
            try {
                const user = await db.getUserById(jwt_payload.id);
                if (!user) {
                    return done(null, false);
                }
                return done(null, user);
            } catch (err) {
                return done(err, false);
            }
        }
    );
}

module.exports = configurePassport;
