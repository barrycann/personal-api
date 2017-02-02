var user = require('../user.js');

module.exports = {
   "getName": function(req, res, next){
      res.status(200).json({"name": user.name});
   },
   "getLocation": function(req, res, next){
      res.status(200).json({"location": user.location});
   },
   "getOccupations": function(req, res, next){
      var ord = req.query.order;
      if(ord){
         if(ord == 'asc'){
            res.status(200).json({"occupations": user.occupations.reverse()});
         }
         if(ord == 'desc'){
            res.status(200).json({"occupations": user.occupations.sort()});
         }
      } else {
         res.status(200).json({"occupations": user.occupations});
      }
   },
   "getOccupationsLatest": function(req, res, next){
      var arr = user.occupations;
      var slc = arr.slice(-1);
      res.status(200).json({"latestOccupation": slc});
   },
   "getHobbies": function(req, res, next){
      res.status(200).json({"hobbies": user.hobbies});
   },
   "getHobbiesByType": function(req, res, next){
      var t = req.params.type;
      var filteredHobbies = [];
      for(var i=0; i<user.hobbies.length; i++){
         if(user.hobbies[i].type == t){
            filteredHobbies.push(user.hobbies[i].name);
         }
      }
      res.status(200).json({ "hobbies": filteredHobbies})
   },
   "getFamily": function(req, res, next){
      var filteredFamily = [];
      if(req.query.relation){
         for(var i=0; i<user.family.length;i++){
            if(user.family[i].relation == req.query.relation){
               filteredFamily.push(user.family[i].relation);
            }
         }
         res.status(200).json({"family": filteredFamily});
      } else {
         res.status(200).json({"family": user.family});
      }
   },
   "getFamilyByGender": function(req, res, next){
      var g = req.params.gender;
      var filteredFamily = [];
      for(var i=0; i<user.family.length; i++){
         if(user.family[i].gender == g){
            filteredFamily.push(user.family[i].name);
         }
      }
      res.status(200).json({"family": filteredFamily});
   },
   "getRestaurants": function(req, res, next){
      var filteredRestaurants = [];
      if(req.query.rating){
         for(var i=0;i<user.restaurants.length;i++){
            if(user.restaurants[i].rating >= req.query.rating){
               filteredRestaurants.push(user.restaurants[i]);
            }
         }
         res.status(200).json({"restaurants": filteredRestaurants});
      } else {
         res.status(200).json({"restaurants": user.restaurants});
      }
   },
   "getRestaurantsByName": function(req, res, next){
      var fav = req.params.name;
      for(var i=0;i<user.restaurants.length;i++){
         if(user.restaurants[i].name == fav){
            res.status(200).json({"favoriteRestaurant": user.restaurants[i]});
         }
      }
   },
   "putName": function(req, res, next){
      var newName = req.params.name;
      user.name = newName;
      res.status(200).json({"name": user.name});
   },
   "putLocation": function(req, res, next){
      var newLoc = req.params.location;
      user.location = newLoc;
      res.status(200).json({"location": user.location});
   },
   "postHobbies": function(req, res, next){
      var newHobby = {
         "name": req.body.name,
         "type": req.body.type
      }
      user.hobbies.push(newHobby);
      res.status(200).json({"hobbies": user.hobbies});
   },
   "postOccupations": function(req, res, next){
      user.occupations.push(req.params.occ);
      res.status(200).json({"occupations": user.occupations});
   },
   "postFamily": function(req, res, next){
      var newFam = {
         "name": req.body.name,
         "relation": req.body.relation,
         "gender": req.body.gender
      }
      user.family.push(newFam);
      res.status(200).json({"family": user.family});
   },
   "postRestaurants": function(req, res, next){
      var newRest = {
         "name": req.body.name,
         "type": req.body.type,
         "rating": req.body.rating
      }
      user.restaurants.push(newRest);
      res.status(200).json({"restaurants": user.restaurants});
   }
}