//Adding a new item to the list of items
function newItem() {

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);


    if (inputValue === '') {
        alert('Please enter an item');
    } else {
        $("#list").append(li);  //Using the jQuery selector allows me to skip setting a variable and select #list directly
    }

//Crossing out an item from the list of items

function crossOut() {
    li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

// Adding the delete button "X"

let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

// Adding CLASS DELETE (DISPLAY: NONE) from the css

crossOutButton.on('click', deleteListItem);

    function deleteListItem() {
             li.addClass('delete')
          }

// Reordering the items:
$('#list').sortable();

}
