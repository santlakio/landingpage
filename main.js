// DOM elementit
const aika = document.getElementById('time'),
    tervehdys = document.getElementById('greeting'),
    nimi = document.getElementById('name'),
    focus = document.getElementById('focus');

// Ajannäyttö
function naytaAika() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    
time.innerHTML = `${hour}<span>:</span>${lisaaNolla(min)}<span>:</span>${lisaaNolla(sec)}`;

setTimeout(naytaAika, 1000);
}

// Lisätään nollat kelloon
function lisaaNolla(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Taustakuva ja tervehdysteksti
function taustaKuva() {
    let today = new Date(),
        hour = today.getHours();
        
    if(hour < 12) {
        // Aamu
        document.body.style.backgroundImage = "url(aamu.jpg)";
        greeting.textContent = 'Hyvää Huomenta';
    } else if (hour < 18) {
        // Iltapäivä
        document.body.style.backgroundImage = "url(iltapaiva.jpg)";
        greeting.textContent = 'Hyvää Iltapäivää';
    } else {
        // Ilta
        document.body.style.backgroundImage = "url(ilta.jpg)";
        greeting.textContent = 'Hyvää Iltaa';
        document.body.style.color= 'white;'

    }

}

// Nimenvaihto
function haeNimi() {
    if(localStorage.getItem('nimi') === null) {
        nimi.textContent = '[Kirjoita Nimesi]';
    } else {
        nimi.textContent = localStorage.getItem('nimi');
    }
}

function asetaNimi(e) {
    if(e.type === 'keypress') {
        // Varmistetaan että on painettu Enter
        if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('nimi', e.target.innerText);
        nimi.blur();
        }
    } else {
        localStorage.setItem('nimi', e.target.innerText);
    }
}

// Päivän Focus
function haeFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Lisää suunnitelma]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Aseta Focus
function asetaFocus(e) {
    if(e.type === 'keypress') {
        // Varmistetaan että on painettu Enter
        if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

nimi.addEventListener('keypress', asetaNimi);
nimi.addEventListener('blur', asetaNimi);
focus.addEventListener('keypress', asetaFocus);
focus.addEventListener('blur', asetaFocus);


//Suorita
naytaAika();
taustaKuva();
haeNimi();
haeFocus();


