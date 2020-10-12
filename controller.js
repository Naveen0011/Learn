var bodyParser = require('body-parser');
var signature = require('./model');

module.exports = function(app){
    app.use(bodyParser.json());
 //   app.use(bodyParser.urlencoded(),{extended : true});

    app.get('/',(req,res)=>{
        res.send("We did it !");
        console.log("Sachin");
    });
    
    app.get('/api/signature',(req,res)=>{
        signature.find({},(err,result)=>{
            res.send(result);
        });
    });

    app.post('/api/signature',(req,res)=>{
        signature.create({guestSign : req.body.guestSign,message : req.body.message});
        res.send("Load Successful");
    });
}