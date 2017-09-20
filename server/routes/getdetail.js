let express=require('express');
let router = express.Router();
let emp= require ('../model/schema_register');

/* GET home page. */
router.get('/:email',(req, res)=> {
	emp.find({Email: req.params.email},(err,data)=>{
		if(err){
			console.log(err);
			res.send(err);
		}
		else
		{
			console.log(data);
			res.json(data);
		}
	})

});

module.exports = router;
