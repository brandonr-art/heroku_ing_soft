var express = require('express');
var router = express.Router();
var request = require('request');

const app  = express();
app.set('port', process.env.PORT || '3000');




router.get('/listar',(req,res,next) => {
  //var url = req.host + ':'+app.get('port') + '/marvel/api/comic'
  var url = req.protocol + '://' + req.hostname +'/marvel/api/comic'
  request.get(url , (err,response,body)=>{
    if(err) res.status(404).json({mensaje:url});
    else res.render('comic_view',{'datos': JSON.parse(body) });
  });
});

module.exports = router;
