var express = require('express');
var GitHubApi = require("github");
var app = express();
var githubC = null;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post('/toilet/:id/', function (request, response) {
  response.send('thank you');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


app.get('/toilet/create', function (request, response) {
    var _t = new Toilet();
    _t.commit();
});
/*
* the id is a string;
* {COUNTRY_CODE}/{POSTCODE}/{POSITION}/{NAME}
* */

var Toilet = function (_id, _properties) {
  this.id = null;
  this.properties = {};


  if(!_id || _id == undefined || _id != null){
    //Load from github
  }else if(_properties){
    //create Data
  }
}

Toilet.create = function (_properties) {
  var id     = _properties.country
      +'/'+_properties.postcode
      +'/'+_properties.postition
      +'/'+_properties.name;

  var toilet = new Toilet(null, _properties);
  toilet.id = id;
}

Toilet.prototype.commit = function () {
  console.log(github());
    var updateBranch;
      updateBranch = github().repos.getBranch({
    user  : 'elektrowolle',
    repo  : 'ToiletCodes',
    branch: 'update'
  }, function () {
      console.log('reply of github');
      console.log('reply of github');
      console.log(updateBranch);
      if(typeof updateBranch == 'undefined'){
          updateBranch = github().repos.createBranch({
              user: 'elektrowolle',
              repo: 'ToiletCodes',
              branch: 'update'
          }, function () {
              console.log(updateBranch);
          });

      }
  });
}

Toilet.Properties = function(
        _country,
        _city,
        _postcode,
        _name,
        _hours,
        _position,
        _acccess,
        _where,
        _babytable,
        _accessible,
        _goods
      ){
  this.country    = _country;
  this.city       = _city;
  this.postcode   = _postcode;
  this.name       = _name;
  this.hours      = _hours;
  this.position   = _position;
  this.acccess    = _acccess;
  this.where      = _where;
  this.babytable  = _babytable;
  this.accessible = _accessible;
  this.goods      = _goods;
}

var LatLng = function (_lat, _lng) {
  this.lat = _lat;
  this.lng = _lng;
}

var github = function (_callBack) {
  if(githubC == null){
    githubC = new GitHubApi({
      // required
      version: "3.0.0",
      // optional
      debug: true,
      protocol: "https",
      host: "api.github.com", // should be api.github.com for GitHub
      timeout: 5000,
      headers: {
        "user-agent": "ToiletIndexer" // GitHub is happy with a unique user agent
      }
    });
  }
  return githubC;
}