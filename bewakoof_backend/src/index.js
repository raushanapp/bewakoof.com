
const express =require('express');

const app = express();
const userController = require("./controller/user.controller");
const {register,login,login_mobile,generateToken} = require("./controller/auth.controller")
const menController = require("./controller/men.controller");
const girlsController = require("./controller/women.controller");
const addressController = require("./controller/address.controller");
const passport =require("./config/google.auth")
const cors = require("cors")
app.use(express.json());

app.use(cors())
app.use("/user",userController);
app.use("/men",menController);
app.use("/women",girlsController);
app.use("/address",addressController)

app.post("/register",register);
app.post("/login",login);
app.post("/number",login_mobile)


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile',"email"] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/google/failure', session:false }),
  function(req, res) {
    const token = generateToken(req.user)
     return res.status(200).send({user:req.user,token});
  });

  app.get("", async (req, res) => {
    try {
      return res.send("Your server is live on Heroku");
    } catch (err) {
      return res.send(err.message);
    }
  });

module.exports = app;