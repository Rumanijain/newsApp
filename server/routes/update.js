let express=require('express');
let router = express.Router();
let up=require('../model/schema');
/* GET users listing. */
console.log("update console");
router.put('/:_id',(req, res)=> {
  up.update({_id:req.params._id},
  	{$set:{comments:req.body.comments
      }}
  , (err,data)=>{
  	if(err){
  		console.log(err);
  	}
  	else{
  		console.log(data);
  		res.json(data);
	}
  })
});

module.exports = router;
