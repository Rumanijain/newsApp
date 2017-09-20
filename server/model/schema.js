let mongoose =require('mongoose');
mongoose.set('debug',true);
var Schema=mongoose.Schema;
var MainSchema = new Schema({
	url:{type: String},
	urlToImage:{ type: String},
	title:{type: String},
	description:{type: String},
	author:{type: String},
	comments:{type: String}
},{collection:"newsdaily",versionkey:false});
var model = mongoose.model('newsdaily',MainSchema);

module.exports=model;
