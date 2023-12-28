// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const { Strategy: InstagramStrategy } = require('passport-instagram');
const { Strategy: LinkedInStrategy } = require('passport-linkedin-oauth2');
const { Strategy: FacebookStrategy } = require('passport-facebook');

const app = express();
const port = 5000; // or any port you prefer

// Set up MongoDB connection
mongoose.connect('mongodb://localhost/crm-app', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up passport
passport.use(new InstagramStrategy({/* Instagram Strategy Configuration */}));
passport.use(new LinkedInStrategy({/* LinkedIn Strategy Configuration */}));
passport.use(new FacebookStrategy({/* Facebook Strategy Configuration */}));

app.use(passport.initialize());

// Your API routes go here...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
