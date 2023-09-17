document.addEventListener('DOMContentLoaded', function () {
    const selectableItems = document.querySelectorAll('.selectable');
    const spinButton = document.getElementById('spin');
    const resultDisplay = document.getElementById('result');

    let selectedType = null;
    let selectedValue = null;

    selectableItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseout', function () {
            item.classList.remove('hovered');
        });

        item.addEventListener('click', function () {
            selectableItems.forEach(function (selectable) {
                selectable.classList.remove('selected');
            });

            item.classList.add('selected');

            selectedType = item.getAttribute('data-type');
            selectedValue = item.getAttribute('data-value');
        });
    });

    spinButton.addEventListener('click', function () {
        const randomNumber = Math.floor(Math.random() * 36) + 1;

        let message = '';
        if (selectedType === 'red' || selectedType === 'black') {
            const numberElement = document.querySelector('.bet[data-value="' + randomNumber + '"]');
            const numberColor = numberElement.classList.contains('red') ? 'red' : 'black';

            if (selectedType === numberColor) {
                message = 'Het nummer was ' + randomNumber + '. Je wint X2!';
            } else {
                message = 'Het nummer was ' + randomNumber + '. Je wint niets.';
            }
        } else if (selectedType === 'odd' || selectedType === 'even') {
            if ((selectedType === 'odd' && randomNumber % 2 === 1) || (selectedType === 'even' && randomNumber % 2 === 0)) {
                message = 'Het nummer was ' + randomNumber + '. Je wint X2!';
            } else {
                message = 'Het nummer was ' + randomNumber + '. Je wint niets.';
            }
        } else if (selectedType === 'number' && selectedValue !== null) {
            if (selectedValue == randomNumber) { // Vergelijk hier met '==' in plaats van '==='
                message = 'je keuze ' + selectedValue + ' is correct. Je wint 36x!';
            } else {
                message = 'je keuze ' + selectedValue + ' is incorrect het was ' + randomNumber;
            }
        } else {
            message = 'Ongeldige selectie';
        }

        resultDisplay.textContent = message;
    });
});