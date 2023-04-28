const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes(done)

// GET a user
router.get('/:id', async (req, res) => {
  try{
    const userData = await User.findByPk(req.params.id);

    res.status(200).json(userData);
    //can add additional catch errors here in the try section for user errors and other things
      //that can go wrong other than missing code (500 level error)
  } catch(err) {
    res.status(500).json(err);
  }
});
  
// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
    });
   res.json(userData); 
  } catch(err) {
  res.json(err)
  }
});


// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
  const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(userData);
  } catch (err){
  res.json(err);
  }
});

module.exports = router;
