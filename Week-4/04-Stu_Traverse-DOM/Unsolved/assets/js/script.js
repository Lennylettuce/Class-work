// Access element using id
//also did a version where i just changed the original target in variable to h1 to effect style change
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');
//change target to h1, put h1 id in html

// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = '50px';
//selects first child element of target article div, second example targets first child of headerDiv
headerDiv.children[0].style.color = 'white';
 