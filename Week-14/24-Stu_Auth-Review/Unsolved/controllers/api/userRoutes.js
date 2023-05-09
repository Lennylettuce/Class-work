const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    // TODO: Add a comment describing the functionality of this expression
      //fineOne method to get one user's email located in where clause
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // TODO: Add a comment describing the functionality of this expression
      //checkPassword method references userData password and checks validity
        // and sends error code if doesnt match THIS SINGLE userData
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // TODO: Add a comment describing the functionality of this method
      //session.save method to store logged in userData and sets logged_in to true for session
        //create session, add user_id and logged_in properties 
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // TODO: Add a comment describing the functionality of this method
      //on logout page, this terminates a session with a status code for res
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
