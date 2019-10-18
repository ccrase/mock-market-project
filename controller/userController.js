const db = require("../models");

console.log("inside usercontroller");
// Defining methods for the booksController
module.exports = {
 
  findOrCreate: function(req, res) {
      db.User.findOne({ sub: req.body.sub }).then((CurrentUser) => {
        if (CurrentUser) {
            //already have a usser
            console.log('Welcome Back', CurrentUser);
            res.json(CurrentUser);
        } else {
            //if not create user in our DB
            new db.User({
              nickname: req.body.nickname,
              name: req.body.name,
              // last_name: {type: String, required: true, trim: true},
              email: req.body.name,
              sub:req.body.sub,
              picture: req.body.picture,
            }).save().then((newUser) => {
                console.log('New user created' + newUser);
                res.json(newUser);
            })
            .catch(err => console.log(err));
        }
    })
  },
  addFavorite: function(req, res){
    console.log("inside userController, add favorite " + req.body.tickerName);
    db.Favorites.create(req.body.tickerName)
    .then(dbFavorite =>{
      console.log(dbFavorite);
      // return db.User.findOneAndUpdate({"_id" : req.body.user}, {$push: { Favorites: dbFavorite._id}}, {new: true}); 
    })
    .catch(err => console.log(err))
  }


};

// res.json(dbModel)