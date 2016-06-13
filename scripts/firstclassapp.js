var select1 = document.getElementById('select1');
var select2 = document.getElementById('select2');

// Config
// Key: City
// Value: Array of city destinations
var config = {
    'BOSTON, MA': ['FORT LEE, NJ', 'HACKENSACK, NJ', "NEWARK, NJ", "NORTH ARLINGTON, NJ"],
    'FORT LEE, NJ': ["BOSTON, MA","WASHINGTON, DC"],
    'HACKENSACK, NJ': ["BOSTON, MA","WASHINGTON, DC"],
    'NEWARK, NJ': ["BOSTON, MA","WASHINGTON, DC"],
    'NORTH ARLINGTON, NJ': ["BOSTON, MA","WASHINGTON, DC"],
    'NEY YORK CITY, NY': ['PHILADELPHIA, PA'],
    'PHILADELPHIA, PA': ['NEY YORK CITY, NY'],
    'WASHINGTON D.C.': ['NEWARK, NJ','NORTH ARLINGTON, NJ','HACKENSACK, NJ','FORT LEE, NJ']
}

// add item method

var addItemToSelect = function (select, label) {
    var option = document.createElement('option');
    option.textContent = label;
    option.value = label;
    select.appendChild(option);
}

// populate select 1

for (var city in config) {
    addItemToSelect(select1, city);
}

select1.addEventListener('change', function () {

    // get selection's destinations
    var selection = this.options[this.selectedIndex].value;
    var destinations = config[selection];

    // clear select 2
    select2.length = 0;

    // populate select 2
    addItemToSelect(select2, '');
    for (var key in destinations) {
        addItemToSelect(select2, destinations[key]);
    }

});
