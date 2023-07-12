import userModel from '../models/User.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const userController = {

}

userController.createAccount = async (req, res, next) => {
    try {
        //This generates a new hashed password, and adds salt in one line
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await userModel.createUser(req.body.username, hashedPassword, req.body.email);
        console.log(user)
        next();
    } catch {
        res.status(500).send('Unable to create account');
      }
}

userController.findUser = async (req, res, next) => {
  const { input, password } = req.body;
  let user;
  //Search for user in the database
  if(input.includes('@')){
  user = await userModel.findUser(null, input);
  } else {
    user = await userModel.findUser(input, null);
  }
  //If the user is not found, unable to login
  if(user.length <= 0) res.status(500).send('Unable to login');
  //Compare the input password to the stored hashed password
  try {
    if(await bcrypt.compare(password, user[0].password)){
      res.locals.user = user[0];
      next();
    } else {
        res.send('Unable to login');
      }
  } catch {
        res.status(500).send('bcrypt not working');
    }
}

userController.createSession = async (req, res, next) => {
  const username = res.locals.user.username;
  const randomString = crypto.randomBytes(15).toString('hex');
  const email = res.locals.user.email;
  const accessToken = jwt.sign(randomString, process.env.ACCESS_TOKEN_SECRET);
  res.cookie('token', accessToken, { httpOnly: true, secure: true, maxAge: 1000 * 60 * 60 * 24});
  res.cookie('username', username, { httpOnly: true, secure: true, maxAge: 1000 * 60 * 60 * 24});
  //Current time
  const date = new Date();
  //Function adds 30 seconds to current time
  function addSeconds(date, seconds) {
    date.setSeconds(date.getSeconds() + seconds);
    return date;
  }
  //Our new time with 30 seconds added
  const expirationDate = addSeconds(date, 30 * 2 * 30)
  await userModel.createSession(username, email, accessToken, expirationDate);
  next();
}

userController.checkSession = (req, res, next) => {
  const token = req.cookies.token;
  const username = req.cookies.username;
  if (!token) res.status(401).send('There is no token');
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, tokenString) => {
    if(err) return res.status(403).send('Token is not valid');
    // res.locals.user = user;
    let dateNow = new Date();
    let user = await userModel.findUser(username)
    let expireDate = user[0].session_expiration;
    if(dateNow.getTime() > expireDate.getTime()){
      res.send('Session is expired')
    } else {
      res.locals.user = user[0];
      // console.log(user[0])
      next();
    }
  })
}


export default userController;
