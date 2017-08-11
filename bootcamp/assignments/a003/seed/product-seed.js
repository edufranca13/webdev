var mongoose = require('mongoose');

var Camp = require('../models/campground');
var Comment = require('../models/comment');

var data = [
  {
    name: "Cloud Rest",
    image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx",
    description: "Rest here.",
  },
  {
    name: "Second try",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJ5jAwLUVhm3GRw4gSXDoSMxco5sTu-mpjezy5gGnpxkms1sGvQ",
    description: "Lay down here.",
  },
  {
    name: "Muy hud Green Field",
    image: "http://www.emerycounty.com/rec/images/Facilities/P0012971a.JPG",
    description: "Trailer stuff",
  },
  {
    name: "Haleu camp ground",
    image: "https://www.recreation.gov/webphotos/NRSO/pid75386/0/540x360.jpg",
    description: "New Arabic Campground",
  },
]

function seedDB() {
  Camp.remove({}, function(err){
    if (err)
      console.log(err);
    else {
      data.forEach(function (seed) {
        Camp.create(seed, function(err, campground) {
          if (err)
            console.log(err);
          else {
            Comment.create({
              text: "This place is great but I wish had internet.",
              author: "Homer",
            }, function(err, comment) {
              if (err)
                console.log(err);
              else {
                campground.comments.push(comment);
                campground.save();
              }
            });
          };
        });
      });
    };
  });
};

module.exports = seedDB;
