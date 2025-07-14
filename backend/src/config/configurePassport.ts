import { VerifiedCallback } from "passport-jwt";

const cookieExtractor = require("./cookieExtractor").default;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const db = require("../db/index");

const options = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        cookieExtractor,
    ]),
};

function configurePassport(passport: any) {
    passport.use(
        new JwtStrategy(options, async function (
            jwt_payload: any,
            done: VerifiedCallback
        ) {
            try {
                const user = await db.user.getUserById(jwt_payload.id);
                if (!user) {
                    return done(null, false);
                }
                return done(null, user);
            } catch (err) {
                return done(err, false);
            }
        })
    );
}

module.exports = configurePassport;
