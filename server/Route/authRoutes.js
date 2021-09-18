const express = require('express');
const authRouter = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const authController = require('../Controller/authController');

//[URL] /api/auth/google

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
      callbackURL: 'http://localhost:5000/api/auth/google/callback',
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
    successRedirect: '/api/auth/success',
    failureRedirect: '/api/auth/error',
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
