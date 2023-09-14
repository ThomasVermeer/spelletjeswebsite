document.addEventListener('DOMContentLoaded', function () {
    const selectableItems = document.querySelectorAll('.selectable');

    // Voeg hover-effect toe aan selecteerbare elementen
    selectableItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseout', function () {
            item.classList.remove('hovered');
        });

        // Voeg klikgebeurtenis toe voor selecteren van knoppen
        item.addEventListener('click', function () {
            // Deselecteer alle selecteerbare elementen
            selectableItems.forEach(function (selectable) {
                selectable.classList.remove('selected');
            });

            // Markeer het geselecteerde element
            item.classList.add('selected');
        });
    });
});