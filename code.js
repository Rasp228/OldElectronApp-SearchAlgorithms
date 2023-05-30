fs = require('fs');
let dane = [];
let danex = [];
const columns = {
    numer: 0,
    nazwa: 1,
    kategoria: 2,
    kraj: 3,
    cena: 4,
    promocja: 5,
    dostepnosc: 6,
    zepsucie: 7,
    sprzedaz: 8
}

class record{
    constructor(numer, nazwa, kategoria, kraj, cena, promocja, dostepnosc, zepsucie, sprzedaz) {
        this.numer = numer;
        this.nazwa = nazwa;
        this.kategoria = kategoria;
        this.kraj = kraj;
        this.cena = cena;
        this.promocja = promocja;
        this.dostepnosc = dostepnosc;
        this.zepsucie = zepsucie;
        this.sprzedaz = sprzedaz;
    }
}

function bane(numer, kolumna) {
    var wartosc;
    switch (kolumna) {
        case columns.numer:
            wartosc = dane[numer].numer;
            break;
        case columns.nazwa:
            wartosc = dane[numer].nazwa;
            break;
        case columns.kategoria:
            wartosc = dane[numer].kategoria;
            break;
        case columns.kraj:
            wartosc = dane[numer].kraj;
            break;
        case columns.cena:
            wartosc = dane[numer].cena;
            break;
        case columns.promocja:
            wartosc = dane[numer].promocja;
            break;
        case columns.dostepnosc:
            wartosc = dane[numer].dostepnosc;
            break;
        case columns.zepsucie:
            wartosc = dane[numer].zepsucie;
            break;
        case columns.sprzedaz:
            wartosc = dane[numer].sprzedaz;
    }
    return wartosc;
}

function wyswietl_lancuch() {
    let ilosc_wyswietlanych = document.getElementById('ilosc wyswietlanych').value;
    if (!document.getElementById('ilosc wyswietlanych').checkValidity()) {
        ilosc_wyswietlanych = 0;
    }
    niewidzialny.style.display = 'inherit';
    const dane_tabeli = document.getElementById('dane-tabeli');
    dane_tabeli.innerHTML = '';
    const nowy_wiersz = gora_tabeli();
    dane_tabeli.append(nowy_wiersz);
    for (let i = ilosc_wyswietlanych; i < dane.length; i++) {
        const wiersz = document.createElement('tr');
        const kolumna0 = document.createElement('td');
        const kolumna1 = document.createElement('td');
        const kolumna2 = document.createElement('td');
        const kolumna8 = document.createElement('td');
        const kolumna3 = document.createElement('td');
        const kolumna4 = document.createElement('td');
        const kolumna5 = document.createElement('td');
        const kolumna6 = document.createElement('td');
        const kolumna7 = document.createElement('td');
        kolumna0.innerHTML = dane[i].numer;
        kolumna1.innerHTML = lancuch_nazw[0][i];
        kolumna2.innerHTML = lancuch_nazw[1][i];
        kolumna8.innerHTML = lancuch_nazw[2][i];
        kolumna3.innerHTML = lancuch_nazw[3][i];
        kolumna4.innerHTML = lancuch_nazw[4][i];
        kolumna5.innerHTML = lancuch_nazw[5][i];
        kolumna6.innerHTML = lancuch_nazw[6][i];
        kolumna7.innerHTML = lancuch_nazw[7][i];
        wiersz.append(kolumna0, kolumna1, kolumna2, kolumna8, kolumna3, kolumna4, kolumna5, kolumna6, kolumna7);
        dane_tabeli.append(wiersz);
        if (i - 49 > ilosc_wyswietlanych) {
            break;
        }
    }
}

function wyswietlanie(wyswietlane, nr) {
    let ilosc_wyswietlanych = document.getElementById('ilosc wyswietlanych').value;
    if (!document.getElementById('ilosc wyswietlanych').checkValidity()) {
        ilosc_wyswietlanych = 0;
    }
    niewidzialny.style.display = 'inherit';
    if (nr == 1) {
        const dane_tabeli = document.getElementById('dane-tabeli');
        dane_tabeli.innerHTML = '';
        const nowy_wiersz = gora_tabeli();
        dane_tabeli.append(nowy_wiersz);
        for (let i = ilosc_wyswietlanych; i < wyswietlane.length; i++) {
            const nowy_wiersz = tworzenie_wiersza(wyswietlane[i]);
            dane_tabeli.append(nowy_wiersz);
            if (i - 49 > ilosc_wyswietlanych) {
                break;
            }
        }
    } else {
        let ilosc_wyswietlanych2 = document.getElementById('ilosc wyswietlanych2').value;
        if (!document.getElementById('ilosc wyswietlanych2').checkValidity()) {
            ilosc_wyswietlanych2 = 0;
        }
        const dane_tabeli_w = document.getElementById('dane-tabeli-w');
        dane_tabeli_w.innerHTML = '';
        const nowy_wiersz_w = gora_tabeli();
        dane_tabeli_w.append(nowy_wiersz_w);
        for (let i = ilosc_wyswietlanych2; i < wyswietlane.length; i++) {
            const nowy_wiersz_w = tworzenie_wiersza(wyswietlane[i]);
            dane_tabeli_w.append(nowy_wiersz_w);
            if (i - 49 > ilosc_wyswietlanych2) {
                break;
            }
        }
    }
}

function gora_tabeli (){
    const wiersz = document.createElement('tr');
    const kolumna0 = document.createElement('td');
    const kolumna1 = document.createElement('td');
    const kolumna2 = document.createElement('td');
    const kolumna8 = document.createElement('td');
    const kolumna3 = document.createElement('td');
    const kolumna4 = document.createElement('td');
    const kolumna5 = document.createElement('td');
    const kolumna6 = document.createElement('td');
    const kolumna7 = document.createElement('td');
    kolumna0.innerHTML = 'Numer';
    kolumna1.innerHTML = 'Nazwa';
    kolumna2.innerHTML = 'Kategoria';
    kolumna8.innerHTML = 'Kraj';
    kolumna3.innerHTML = 'Cena (zl)';
    kolumna4.innerHTML = 'Promocja (%)';
    kolumna5.innerHTML = 'Dostepnosc';
    kolumna6.innerHTML = 'Zepsucie';
    kolumna7.innerHTML = 'Sprzedaz'; 
    wiersz.append(kolumna0, kolumna1, kolumna2, kolumna8, kolumna3, kolumna4, kolumna5, kolumna6, kolumna7);
    return wiersz;
}

function tworzenie_wiersza(dane) {
    const wiersz = document.createElement('tr');
    const kolumna0 = document.createElement('td');
    const kolumna1 = document.createElement('td');
    const kolumna2 = document.createElement('td');
    const kolumna8 = document.createElement('td');
    const kolumna3 = document.createElement('td');
    const kolumna4 = document.createElement('td');
    const kolumna5 = document.createElement('td');
    const kolumna6 = document.createElement('td');
    const kolumna7 = document.createElement('td');
    kolumna0.innerHTML = dane.numer;
    kolumna1.innerHTML = dane.nazwa;
    kolumna2.innerHTML = dane.kategoria;
    kolumna8.innerHTML = dane.kraj;
    kolumna3.innerHTML = dane.cena;
    kolumna4.innerHTML = dane.promocja;
    kolumna5.innerHTML = dane.dostepnosc;
    kolumna6.innerHTML = dane.zepsucie;
    kolumna7.innerHTML = dane.sprzedaz;
    wiersz.append(kolumna0, kolumna1, kolumna2, kolumna8, kolumna3, kolumna4, kolumna5, kolumna6, kolumna7);
    return wiersz;
}

function dodaj_wiersz() {
    const nazwa = document.getElementById('podana_nazwa').value;
    const kategoria = document.getElementById('podana_kategoria').value;
    const kraj = document.getElementById('kraj_pochodzenia').value;
    const cena = document.getElementById('podana_cena').value;
    const promocja = document.getElementById('promocja_p').value;
    const dostepnosc = document.getElementById('dostepnosc').checked;
    const zepsucie = document.getElementById('zepsucie').checked;
    const sprzedaz = document.getElementById('czy_na_sprzedaz').checked;
    const numer = dane.length;
    Poprawnosc_podawanych_danych.style.display = 'inherit';
    Poprawnosc_podawanych_danych.style.color = "red";
    if (!document.getElementById('podana_nazwa').checkValidity()){
        Poprawnosc_podawanych_danych.innerHTML = "Zle podana nazwa produktu!";
        return;
    } 
    if (!document.getElementById('podana_kategoria').checkValidity()){
        Poprawnosc_podawanych_danych.innerHTML = "Zle podana nazwa kategorii!";
        return;
    }
    if (!document.getElementById('kraj_pochodzenia').checkValidity()) {
        Poprawnosc_podawanych_danych.innerHTML = "Zle podany kraj pochodzenia!";
        return;
    }
    if (!document.getElementById('podana_cena').checkValidity()){
        Poprawnosc_podawanych_danych.innerHTML = "Zle podana cena!";
        return;
    }
    if (!document.getElementById('promocja_p').checkValidity()){
        Poprawnosc_podawanych_danych.innerHTML = "Zle podany procent promocji!";
        return;
    }
    Poprawnosc_podawanych_danych.style.color = "green";
    Poprawnosc_podawanych_danych.innerHTML = "Dodano nowy element!";
    const dataObj = new record(numer, nazwa, kategoria, kraj, cena, promocja, dostepnosc, zepsucie, sprzedaz);
    dane.push(dataObj);
    wyswietlanie(dane, 1);
}

function usun_wiersz(){
    const nr_wiersza = document.getElementById('nr_wiersza');
    const n = parseInt(nr_wiersza.value);
    dane.splice(n, 1);
    for (let i = 0; i < dane.length; i++) {
        dane[i].numer = i;
    }
    wyswietlanie(dane, 1);
}

function zapisz_dane(){
    const jsonData = JSON.stringify(dane);
    fs.writeFileSync('Dane.txt', jsonData);
}

function wczytaj_dane(){
    const jsonData = fs.readFileSync('Dane.txt');
    dane = JSON.parse(jsonData);
    wyswietlanie(dane, 1);
}

function losowy_tekst(){
    const alfabet = 'abcdefghijklmnoprstuwz';
    const dalfabet = 'ABCDEFGHIJKLMNOPRSTUWZ';
    let text = '';
    for (let i = 0; i < 1; i++) {
        if (i == 0) {
            let los = Math.round(Math.random() * 3);
            let literki = dalfabet.charAt(los);
            text += literki;
        }
        let index = Math.round(Math.random() * 3);
        let char = alfabet.charAt(index);
        text += char;
    }
    return text;
}

function losowe_dane() {
    const ilosc_losowanych = parseInt(document.getElementById('ilosc_losowanych').value);
    dane = [];
    let t = true;
    let tt = true;
    let ttt = true;
    let cos = 0;
    let n = 0;
    let p = 0.0;
    for (let i = 0; i < ilosc_losowanych; i++) {
        n = Math.round(Math.random() * 99);
        p = Math.round(Math.random() * 9999) / 100;
        const randText = losowy_tekst();
        const losowytekst = losowy_tekst();
        const kraj = losowy_tekst();
        cos = Math.round(Math.random() * 100);
        t = true;
        tt = true;
        ttt = true;
        if (cos % 2 === 0) {
            t = false;
        } else if (cos % 3 === 0){
            tt = false;
        } else if (cos % 2 === 1){
            ttt = false;
        }
        const dataObj = new record(i, randText, losowytekst, kraj, p, n, t, tt, ttt);
        dane.push(dataObj);
    }
    wyswietlanie(dane, 1);
    indeks_lancuchowy();
}

function indeks_lancuchowy() {
    const dlugosc = dane.length;
    lancuch_nazw = new Array();
    tablica_poczatkow = new Array();
    for (let i = 0; i <= 7; i++) {
        lancuch_nazw[i] = new Array();
        tablica_poczatkow[i] = new Map();
    }
    const k = dlugosc - 1;
    for (let i = 0; i <= 7; i++) {
        for (let idx = k; idx >= 0; idx--) {
            const aktualna_wartosc = bane(idx, i + 1);
            if (tablica_poczatkow[i].has(aktualna_wartosc)) {
                lancuch_nazw[i][idx] = tablica_poczatkow[i].get(aktualna_wartosc);
                tablica_poczatkow[i].set(aktualna_wartosc, idx);
            } else {
                tablica_poczatkow[i].set(aktualna_wartosc, idx);
                lancuch_nazw[i][idx] = -1;
            }
        }
    }
}

function szukanie_lancuchowe(szukana, kolumna) {
    var czas = performance.now();
    const wynik = [];
    let obecny_idx = tablica_poczatkow[kolumna].get(szukana);
    if (obecny_idx == null) {
        return wynik;
    }
    while (obecny_idx !== -1) {
        wynik.push(obecny_idx);
        obecny_idx = lancuch_nazw[kolumna][obecny_idx];
    }
    console.log("Wyszukiwaie lancuchowe: " + (performance.now() - czas) + 'ms');
    return wynik;
}

function wyswietlwyniki(szukana, kolumna) {
    danex.length = 0;
    const wynik = szukanie_lancuchowe(szukana, kolumna);

    for (let i = 0; i < wynik.length; i++) {
        const idx_rekordu = wynik[i];
        danex.push(dane[idx_rekordu]);
    }
    wyswietlanie(danex, 2);
}

function sortowanie(kolumna) {
    for (let i = 0; i < dane.length; i++) {
        let zamiany = 0;
        for (let j = 0; j < dane.length - i - 1; j++) {
            if (bane(j, kolumna) > bane(j + 1, kolumna)) {
                const temp = dane[j + 1];
                dane[j + 1] = dane[j];
                dane[j] = temp;
                zamiany++;
            }
        }
        if (zamiany == 0) {
            break;
        }
    }
    wyswietlanie(dane, 1)
}

function wyszukiwanie_binarne_f(szukana, kolumna) {
    var czas = performance.now();
    danex.length = 0;
    let min = 0;
    let max = 0;
    max = dane.length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2)
        if (szukana == bane(mid, kolumna)) {
            danex.push(dane[mid]);
            for (let i = mid+1; i < dane.length; i++) {
                if (szukana == bane(i, kolumna)) {
                    danex.push(dane[i]);
                } else {
                    break;
                }
            }
            for (let i = mid - 1; i >= 0; i--) {
                if (szukana == bane(i, kolumna)) {
                    danex.push(dane[i]);
                } else {
                    break;
                }
            }
            console.log("Wyszukiwaie binarne: " + (performance.now() - czas) + 'ms');
            wyswietlanie(danex, 2);
            return;
        }
        if (szukana > bane(mid, kolumna)) {
            min = mid + 1
        }else{
            max = mid - 1
        }
    }
    console.log("Wyszukiwaie binarne: " + (performance.now() - czas));
    wyswietlanie(danex, 2);
}

function wyszukiwanie_liniowe(wyszukiwane_pole, kolumna) {
    var czas = performance.now();
    danex.length = 0;
    for (let i = 0; i < dane.length; i++) {
        if (wyszukiwane_pole == bane(i, kolumna)) {
            danex.push(dane[i]);
        }
    }
    console.log("Wyszukiwaie liniowe: " + (performance.now() - czas) + 'ms');
    wyswietlanie(danex, 2);
}

function wyszukiwanie() {
    let wyszukiwane_pole = document.getElementById('wyszukiwane').value;
    const wyszukiwana_nazwa = document.getElementById('w_nazwa').checked;
    const wyszukiwana_kategoria = document.getElementById('w_kategoria').checked;
    const wyszukiwana_kraj = document.getElementById('w_kraj').checked;
    const wyszukiwana_cena = document.getElementById('w_cena').checked;
    const wyszukiwana_promocja = document.getElementById('w_promocja').checked;
    const wyszukiwana_dostepnosc = document.getElementById('w_dostepnosc').checked;
    const wyszukiwane_zepsucie = document.getElementById('w_zepsucie').checked;
    const wyszukiwane_czy_na_sprzedaz = document.getElementById('w_czy_na_sprzedaz').checked;
    const czy_prawda = document.getElementById('prawda').checked;
    const wyszukiwanie_binarne = document.getElementById('wysz_binarne').checked;
    const wyszukiwanie_lancuchowe = document.getElementById('wysz_lancuch').checked;

    wyszukane_dane_tabeli.style.display = 'inherit';
    dane_tabeli.style.display = 'none';
    Poprawnosc_podawanych_danych.innerHTML = " ";

    var kolumna = 0;

    if (wyszukiwana_nazwa === true) { kolumna = 1 };
    if (wyszukiwana_kategoria === true) { kolumna = 2 };
    if (wyszukiwana_kraj === true) { kolumna = 3 };
    if (wyszukiwana_cena === true) { kolumna = 4; wyszukiwane_pole = Number(wyszukiwane_pole); };
    if (wyszukiwana_promocja === true) { kolumna = 5; wyszukiwane_pole = Number(wyszukiwane_pole); };

    if (kolumna == 0) {
        if (wyszukiwana_dostepnosc === true) { kolumna = 6 };
        if (wyszukiwane_zepsucie === true) { kolumna = 7 };
        if (wyszukiwane_czy_na_sprzedaz === true) { kolumna = 8 };
        if (kolumna == 0) {
            Poprawnosc_podawanych_danych.style.display = 'inherit';
            Poprawnosc_podawanych_danych.style.color = "red";
            Poprawnosc_podawanych_danych.innerHTML = "Nie wybrano parametrow wyszukiwania!";
            return;
        }

        if (wyszukiwanie_lancuchowe == true) {
            wyswietlwyniki(czy_prawda, kolumna - 1);
        } else {
            if (wyszukiwanie_binarne == true) {
                sortowanie(kolumna);
                wyszukiwanie_binarne_f(czy_prawda, kolumna);
            } else {
                wyszukiwanie_liniowe(czy_prawda, kolumna);
            }
        }
        return;
    }

    if (wyszukiwanie_lancuchowe == true) {
        wyswietlwyniki(wyszukiwane_pole, kolumna - 1);
    } else {
        if (wyszukiwanie_binarne == true) {
            sortowanie(kolumna);
            wyszukiwanie_binarne_f(wyszukiwane_pole, kolumna);
        } else {
            wyszukiwanie_liniowe(wyszukiwane_pole, kolumna);
        }
    }
    return;
}

function cofnij() {
    wyszukane_dane_tabeli.style.display = 'none';
    dane_tabeli.style.display = 'inherit';
}

function cofnij_sortowanie() {
    sortowanie(0);
}

// - - - //
function Otwarcie_dodawania() {
    lewy_jeden.style.display = 'inherit';
    lewy_dwa.style.display = 'none';
    lewy_trzy.style.display = 'none';
}

function Otwarcie_opcji() {
    lewy_jeden.style.display = 'none';
    lewy_dwa.style.display = 'inherit';
    lewy_trzy.style.display = 'none';
}

function Otwarcie_wyszukiwania() {
    lewy_jeden.style.display = 'none';
    lewy_dwa.style.display = 'none';
    lewy_trzy.style.display = 'inherit';
}