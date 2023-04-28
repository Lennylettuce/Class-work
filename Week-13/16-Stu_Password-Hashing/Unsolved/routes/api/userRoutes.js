const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
  //Post route for login page, async/await function with try/catch blocks for await funcitons
  
router.post('/login', async (req, res) => {
  try {

  //create const for given params (user email input)
  //(sequalize node library) 
  //User.findOne method to find first entry with these params
  //if not userData then it returns 404 in json message to try again, return;

    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }

  //create const for given params
  //(bcrypt node library) .compare method to compare these params 
  //of user password input hash and encrypted hash returns as boolean value

  //usermodel all data defined here: call from here so can do bcrypt funciton there instead

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
