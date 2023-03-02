var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');



// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmission(event) {
    event.preventDefault();

        var items = $('#shopping-input');
        var itemsEl = input.val();

        shoppingListEl.append('<li>' + itemsEl + '<li>');

       items.val('');
      
}
    
shoppingFormEl.on('submit', handleFormSubmission);
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
