const router = require('express').Router();

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
    //use the .findAll method to grab everything from database
  const userData = await User.findAll({
    attributes: { exclude: ['password']},
    order: [['name', 'ASC']]
  });

  const users = userData.map{user => user.get({ plain: true })};
  res.render('homepage', {users });
});

module.exports = router;

//double curly braces for placing data (string)

//triple curly braces accept and print out html 
