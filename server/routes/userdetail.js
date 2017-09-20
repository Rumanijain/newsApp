let express=require('express');
let router = express.Router();
let user=require('../model/schema_register');
/* GET users listing. */
router.post('/', (req, res)=> {
    console.log("hello....");
  let Name=req.body.Name;
  let Email=req.body.Email;
  let Username=req.body.Username; 
  let Password=req.body.Password;
  
  user.insertMany({
    Name:Name,
  	Email: Email,
    Username:Username,
  	Password:Password
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
