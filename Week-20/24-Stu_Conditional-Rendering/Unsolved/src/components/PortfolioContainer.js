import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
    // create variable for useState, then renderPage function to render either Home, About, Blog or Contact pages
    //by pulling the info from currentPage(prop)

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  // variable to hold the page prop(user input)=> which changes the state because it is our named currentPage(string passed into page as prop) 
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props
                    telling current page variable to be currentPage info , check line 28 notes*/}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line
                  triggers the function to 'handle' the static info that the user wants to access */}
      {renderPage()}
    </div>
  );
}
