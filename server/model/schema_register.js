let mongoose =require('mongoose');
mongoose.set('debug',true);
var Schema=mongoose.Schema;
var MainSchema = new Schema({
	Name:{type: String , required:true},
	Email:{ type: String, required:true},
	Username:{type: String, required:true},
	Password:{type: String, requried:true}

},{collection:"register",versionkey:false});
var model = mongoose.model('register',MainSchema);


MainSchema.pre('save', function (next) {  
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// Create method to compare password input to password saved in database
MainSchema.methods.comparePassword = function(pw, cb) {  
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};



module.exports=model;
