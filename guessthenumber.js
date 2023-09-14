let attempts = 0;
let numbertoget = Math.floor(Math.random() * 101);

document.querySelector('#click')
    .addEventListener('click', () => {
        attempts++;
        let invoernummer = document.getElementById('inputgetal').value;
        alert('je koos getal ' + invoernummer);

        if (numbertoget > invoernummer) {
            alert('hoger');
        }
        if (numbertoget < invoernummer) {
            alert('lager');
        }
        if (numbertoget == invoernummer) {
            alert('gefeliciteerd je hebt het nummer ' + numbertoget + ' weten te raden binnen ' + attempts + ' pogingen');
            numbertoget = Math.floor(Math.random() * 101);


            attempts = 0;
        }
    });
