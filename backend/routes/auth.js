var express = require('express');
var router = express.Router();
var passport = require('passport');
var dotenv = require('dotenv');
var util = require('util');
var url = require('url');
var querystring = require('querystring');

dotenv.config();

// Perform the login, after login Auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0'), function (req, res) {
  res.redirect('http://localhost:8081/');
});

// Perform the final stage of authentication and redirect to previously requested URL or home page
router.get('/callback', function (req, res, next) {

  passport.authenticate('auth0', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }

    req.logIn(user, function (err) {

      if (err) { return next(err); }
      res.redirect('http://localhost:8081/');
    });
  })(req, res, next);
});

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();

  var returnTo = req.protocol + '://' + req.hostname;
  var port = req.connection.localPort;
  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo += ':' + port;
  }
  var searchString = querystring.stringify({
    client_id: process.env.AUTH0_CLIENT_ID,
    returnTo: returnTo
  });

  res.redirect('http://localhost:8081/');
});


router.get('/auth', (req, res) => {
  if (req.user) {
    return res.status(200).send({ isLoggedIn: true })
  }
  return res.status(200).send({ isLoggedIn: false })
});
module.exports = router;
