// TODO: Add a comment explaining role of the index.js file and import statements
    //this is how we consolidate the code from the other js files
        //serves as entry point for webpack

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
