const userController = {

}

userController.createAccount = async (req, res, next) => {
    try {
        //This generates a new hashed password, and adds salt in one line
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        //INSERT INTO users -- Ask Jun about database functions
        next();
    } catch {
        res.status(500).send('Unable to create account');
      }
}

userController.findUser = async (req, res, next) => {
  //Double check with Jun about database query
  const name = req.body.name;
  const user = 'SELECT password FROM users WHERE name=name'
  if(user === null) {
    return res.status(400).send('Unable to login');
  }
    try {
       if(await bcrypt.compare(req.body.password, user.password)) {
         next();
       } else {
        res.send('Unable to login')
       }
    } catch {
        res.status(500).send();
      }
}

module.exports = userController;