// Program to search a list for input string

// Function to search list on keyup in searchbar
function searchFunction() {
    // Declare and assign local variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchbar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("topiclist");
    li = ul.getElementsByTagName('li');

    // Iterate through list and compare search term with list item
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        // Show search results
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        // Hide excluded results
        }
        else {
            li[i].style.display = "none";
        }
    }
}

// Function to auto-select searchbar on page load
window.onload = function () {
    var input = document.getElementById('searchbar');
    input.focus();
    input.select();
}