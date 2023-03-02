// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.

rootEl.children('ul').children().css('background-color', 'white');

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
//grabs last of ul, and first of li
rootEl.children('ul').eq(2).children().eq(0).text('0');

//or 

//rootEl.children('ul').children().eq(6).text('0');