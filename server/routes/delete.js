let express=require('express');
let router = express.Router();
let emp=require ('../model/schema');

/* GET home page. */
router.delete('/:id', (req, res, next)=> {
	emp.findOneAndRemove({
		_id: req.params.id,
	} , (err,data)=>{
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
