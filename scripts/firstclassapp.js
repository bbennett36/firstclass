var select1 = document.getElementById('select1');
var select2 = document.getElementById('select2');

// Config
// Key: City
// Value: Array of city destinations
var config = {
    'BOSTON, MA': ['FORT LEE, NJ', 'HACKENSACK, NJ', "NEWARK, NJ", "N. ARLINGTON, NJ"],
    'FORT LEE, NJ': ["BOSTON, MA","WASHINGTON, D.C"],
    'HACKENSACK, NJ': ["BOSTON, MA","WASHINGTON, D.C"],
    'NEWARK, NJ': ["BOSTON, MA","WASHINGTON, D.C"],
    'N. ARLINGTON, NJ': ["BOSTON, MA","WASHINGTON, D.C"],
    'NEW YORK CITY, NY': ['PHILADELPHIA, PA'],
    'PHILADELPHIA, PA': ['NEW YORK CITY, NY'],
    'WASHINGTON D.C': ['NEWARK, NJ','N. ARLINGTON, NJ','HACKENSACK, NJ','FORT LEE, NJ']
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

$(function () {
    $("#from").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        onClose: function (selectedDate) {
            $("#to").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#to").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        onClose: function (selectedDate) {
            $("#from").datepicker("option", "maxDate", selectedDate);
        }
    });
});
