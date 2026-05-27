const immagine = document.querySelector('#imgAttiva');
const bottone = document.querySelector('#btnAccendi');
let accesa = false;
bottone.addEventListener('click', function () {
    if (!accesa) {
        immagine.src = 'img/yellow_lamp.png';
        bottone.textContent = 'Spegni';
        accesa = true;
    }
    else {
        immagine.src = 'img/white_lamp.png';
        bottone.textContent = 'Accendi';
        accesa = false;
    }
});

<<<<<<< HEAD
=======



>>>>>>> c9a4ccc615538acac37112d03aeb5e24d5233769

