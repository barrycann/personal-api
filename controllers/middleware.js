var skillz = require('../skillz.js');

module.exports = {
   addHeaders: function(req, res, next){
      res.status(200).set({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
         'X-XSS-Protection': '1; mode=block',
         'X-Frame-Options': 'SAMEORIGIN',
         'Content-Security-Policy': "default-src 'self' devmountain.github.io"
      });
      next();
   },
   generateId: function(req, res, next){
      num = skillz[skillz.length -1].id;
      req.body.id = num + 1;
      next();
   },
   verifyUser: function(req, res, next){
      var user = req.params.username;

      if(user == 'barry' && req.params.pin == '1234'){
         next();
      } else {
         res.status(501).send("UNAUTHORIZED!!! NO SECRETS FOR YOU!");
         return;
      }
   }
}