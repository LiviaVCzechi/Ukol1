//Úkol č. 1 FIT email
const jmeno = prompt("Jmeno bez diakritiky").trim();
const prijmeni = prompt("Prijmeni bez diakritiky").trim();
const email = { 
    jmenoKurz: jmeno.slice(0, 3),
    prijmeniKurz: prijmeni.slice(0, 5),
    };  
document.body.innerHTML = "<p>Email: " + email.prijmeniKurz.toLowerCase() + email.jmenoKurz.toLowerCase() + "@fit.cvut.cz"
"</p>"
