//Adding a new item to the list of items
function newItem() {

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);


    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $("#list").append(li);  //Using the jQuery selector allows me to skip setting a variable and select #list directly
    }
