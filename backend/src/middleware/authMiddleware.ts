const authenticateJWT = passport.authenticate("jwt", { session: false });

module.exports = {
    authenticateJWT,
};
