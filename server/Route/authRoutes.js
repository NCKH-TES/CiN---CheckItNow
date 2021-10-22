const express = require('express');
const authRouter = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const authController = require('../Controller/authController');

//[URL] /api/v1/auth/google

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

//SET UP GOOGLE PORT
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL:
        process.env.NODE_ENV === 'prod'
          ? 'https://checkitnowz.herokuapp.com/api/v1/auth/google/callback'
          : 'http://localhost:5000/api/v1/auth/google/callback',
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

authRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

//REDIRECT AFTER LOGIN
authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/api/v1/auth/success',
    failureRedirect: '/api/v1/auth/error',
  })
);

//Login success
authRouter.get('/success', authController.login);
//Login fail
authRouter.get('/error', (req, res) => {
  res.send('Login fail!!');
});

authRouter.post('/register', authController.register);
authRouter.post('/', authController.loginBySystemAccount);

module.exports = authRouter;
