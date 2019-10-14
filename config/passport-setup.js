const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys')
const User = require('../models/UserSchema')

//we will attach the user id to a cookie
passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

//GOOGLE STRATEGY
passport.use(
    new GoogleStrategy({
        callbackURL: 'http://localhost:3001/auth/google/redirect',
        //options for the google strat
        //using the google api behind the scenes
        //this references keys so that we aren't storing the keys in github
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
        //profile is bringing back the information in exchange for the code given to google
        //done is called when we are done with this callback function
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        //check if user already exists in our db
        User.findOne({ google_id: profile.id }).then((CurrentUser) => {
            if (CurrentUser) {
                //already have a usser
                console.log('Welcome Back', CurrentUser);
                done(null, CurrentUser);
            } else {
                //if not create user in our DB
                new User({
                    username: profile.displayName,
                    first_name: profile.name.givenName,
                    last_name: profile.name.familyName,
                    google_id: profile.id,
                    thumbnail:profile._json.picture
                }).save().then((newUser) => {
                    console.log('new user created' + newUser);
                    done(null, newUser);
                });
            }
        });
    })
);

