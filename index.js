// Voeg een eventlistener toe aan alle grid-items om te reageren op de hovergebeurtenis
var gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(function (item, index) {
    var hoverText = item.querySelector('.hover-text');

    item.onmouseover = function () {
        hoverText.style.opacity = "1";
    };

    item.onmouseout = function () {
        hoverText.style.opacity = "0";
    };
});