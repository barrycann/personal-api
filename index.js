var express = require('express');
var bodyParser = require('body-parser');
var middleWare = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

app = express();

app.use(bodyParser.json());
app.use(middleWare.addHeaders);

// User Endpoints
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName);

app.put('/name/:name', mainCtrl.putName);
app.put('/location/:location', mainCtrl.putLocation);

app.post('/hobbies', mainCtrl.postHobbies);
app.post('/occupations/:occ', mainCtrl.postOccupations);
app.post('/family', mainCtrl.postFamily);
app.post('/restaurants', mainCtrl.postRestaurants);

// Skillz Endpoints
app.get('/skillz', mainCtrl.getSkillz);
app.post('/skillz', middleWare.generateId, mainCtrl.postSkillz);

// Secrets Endpoints
app.get('/secrets/:username/:pin', middleWare.verifyUser, mainCtrl.getSecrets);

app.listen(3000, function(){
   console.log('Listening on port 3000...');
});