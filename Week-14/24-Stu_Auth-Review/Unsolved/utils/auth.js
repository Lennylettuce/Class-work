const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
    //created middleware to handle the login redirect
      //if user not logged in the redirect to login page
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
