let express=require('express');
let router = express.Router();
let user=require('../model/schema');
/* GET users listing. */
router.post('/', (req, res)=> {
    console.log("hello....");
  let url=req.body.url;
  let urlToImage=req.body.urlToImage;
  let title=req.body.title; 
  let description=req.body.description;
  let author=req.body.author;
  
  user.insertMany({
    "url":url,
  	"urlToImage": urlToImage,
    "title":title,
  	"description":description,
  	"author":author
  },(err,user)=>{
  	if(err){
  		console.log(err);
  	}
  	else{
  		console.log(user);
  		res.json({emp:user});
	}
  })
});

module.exports = router;
