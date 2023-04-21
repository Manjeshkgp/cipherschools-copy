import { ExtractJwt, Strategy } from "passport-jwt";
import userSchema from "../models/userSchema.js";
import passport from "passport";

var JwtStrategy = Strategy;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

export default async (passport) => {
  passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
      try {
        const user = await userSchema.findById(jwt_payload._id);
        if (!user) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      } catch (err) {
        return done(err, false);
      }
    })
  );
};
