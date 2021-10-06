function newItem(){
    console.log('fired')
    // stop ability for user to highlist list items
    $('#list').addClass('no-select')

    // add list item
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    // stop blank entries into the list. Alert user if blank
    if (inputValue === '') {
        alert('You must write something!');
    }
    else {
        $('#list').append(li);
    }

    // cross out item on the list by double clicking it
    function crossOut(){
        li.toggleClass('strike');
    }
    li.on('dblclick', crossOut);

    // adding delete "X" button
    let crossOutButton = $('<button>X</button>');
    crossOutButton.addClass('crossOutButton')
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem(){
        li.addClass('delete');
    }

    // allow list to be sorted by drag and drop
    $('#list').sortable();
}   

// Stop form from submitting. 
// Allow users to use enter button to add list items.
$('form').on('submit', function(event){
    event.preventDefault();
    newItem();
});