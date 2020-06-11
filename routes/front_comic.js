var express = require('express');
var router = express.Router();
var request = require('request');

const app  = express();
app.set('port', process.env.PORT || '3000');



//var url = req.protocol + '://' + req.hostname +'/marvel/api/comic'
router.get('/listar',(req,res,next) => {
  var url = req.protocol + '://' + req.hostname +'/marvel/api/comic'
  var urlLocal = req.protocol + '://' + req.hostname + ":" + app.get('port') + '/marvel/api/comic'
  
  request.get(urlLocal , (err,response,body)=>{
    if(err){
      request.get(url , (err,response,body)=>{
      if(err) res.status(404).json({mensaje:url});
      else res.render('comic_view',{'datos': JSON.parse(body) });
    });

    }else res.render('comic_view',{'datos': JSON.parse(body) });
  });
  
});




module.exports = router;
