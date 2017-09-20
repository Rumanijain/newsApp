let express =require('express');
let logger =require('morgan');
let bodyParser =require('body-parser');
let mongoose =require('mongoose');
var passport = require('passport');
var passportJwt=require('passport-jwt');  
var jwt = require('jsonwebtoken');  
var index = require('./routes/index');
var users = require('./routes/user');
var config=require('./config/config');
var update =require('./routes/update');
var delet=require('./routes/delete');
var userdetail = require('./routes/userdetail');
var getdetail= require('./routes/getdetail');
var register_schema = require('./model/schema_register');  


let cors = require('cors');
let http=require('http');

const app = express()
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(morgan('dev'));  
//We will add a quick home page route so I can give a quick demonstration of what morgan does. Add this next.

// Initialize passport for use
app.use(passport.initialize());  
//And now we can import our JWT passport strategy. Enter this below our mongoose connection:

// Bring in defined Passport Strategy
require('./config/passport')(passport);  
//Now we can start on our routes. We will start by creating the route group called apiRoutes. We will now be working down without jumping all over the place in the code. That said, this goes beneath the passport strategy import we just did:

// Create API group routes
var apiRoutes = express.Router();  
//Next, we can create our registration route:

// Register new users
apiRoutes.post('/register', function(req, res) {  
  if(!req.body.Email || !req.body.Password) {
    res.json({ success: false, message: 'Please enter email and password.' });
  } else {
    var newUser = new User({
      Name:req.body.Name,
      Email: req.body.Email,
      Username:req.body.Username,
      Password: req.body.Password
    });

    // Attempt to save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({ success: false, message: 'That email address already exists.'});
      }
      res.json({ success: true, message: 'Successfully created new user.' });
    });
  }
});



apiRoutes.post('/authenticate', function(req, res) {  
  register_schema.findOne({
    Email: req.body.Email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      // Check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
          var token = jwt.sign({id:req.body.id,Email:req.body.Email }, config.secret, {
            expiresIn: 10080 // in seconds
          });
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });
    }
  });
});

// Protect dashboard route with JWT
apiRoutes.get('/dashboard', passport.authenticate('jwt', { session: false }), function(req, res) {  
  res.send('It worked! User id is: ' + req.user._id + '.');
});

// Set url for API group routes
app.use('/api', apiRoutes);  
// Home route. We'll end up changing this to our main front end index later.
// app.get('/', function(req, res) {  
//   res.send('Relax. We will put the home page here later.');
// });


app.use('/', index);
app.use('/user', users);
app.use('/update',update);
app.use('/delete',delet);
app.use('/userdetail',userdetail);
app.use('/getdetail',getdetail);
mongoose.connect(config.dbURL)
mongoose.connection.on('connected',function(){
	console.log("Connected Successfully");
})
mongoose.connection.on('error',function(){
	console.log("There is an error");
})
// catch 404 and forward to error handler
app.use((req, res, next)=> {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//app.use('/api',apiRoutes);

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
http.createServer(app).listen(3000,'127.0.0.1');
//app.listen(1337);

module.exports=app;
