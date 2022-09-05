const MAP = document.querySelector("#carte")
const INPUT = document.querySelector('input')
const CONTAINER = document.getElementById("map-container")
var departements = MAP.querySelectorAll("path")

// dict_dep est créé dans le but de relier les numéros de département à leur noms
let dict_dep = {
    "Ain": 1,
    "Aisne": 2,
    "Allier": 3,
    "Alpes-de-Haute-Provence": 4,
    "Hautes-Alpes": 5,
    "Alpes-Maritimes": 6,
    "Ardèche": 7,
    "Ardennes": 8,
    "Ariège": 9,
    "Aube": 10,
    "Aude": 11,
    "Aveyron": 12,
    "Bouches-du-Rhône": 13,
    "Calvados": 14,
    "Cantal": 15,
    "Charente": 16,
    "Charente-Maritime": 17,
    "Cher": 18,
    "Corrèze": 19,
    "Corse-du-Sud": "2A",
    "Haute-Corse": "2B",
    "Côte-d'Or": 21,
    "Côtes-d'Armor": 22,
    "Creuse": 23,
    "Dordogne": 24,
    "Doubs": 25,
    "Drôme": 26,
    "Eure": 27,
    "Eure-et-Loir": 28,
    "Finistère": 29,
    "Gard": 30,
    "Haute-Garonne": 31,
    "Gers": 32,
    "Gironde": 33,
    "Hérault": 34,
    "Ille-et-Vilaine": 35,
    "Indre": 36,
    "Indre-et-Loire": 37,
    "Isère": 38,
    "Jura": 39,
    "Landes": 40,
    "Loir-et-Cher": 41,
    "Loire": 42,
    "Haute-Loire": 43,
    "Loire-Atlantique": 44,
    "Loiret": 45,
    "Lot": 46,
    "Lot-et-Garonne": 47,
    "Lozère": 48,
    "Maine-et-Loire": 49,
    "Manche": 50,
    "Marne": 51,
    "Haute-Marne": 52,
    "Mayenne": 53,
    "Meurthe-et-Moselle": 54,
    "Meuse": 55,
    "Morbihan": 56,
    "Moselle": 57,
    "Nièvre": 58,
    "Nord": 59,
    "Oise": 60,
    "Orne": 61,
    "Pas-de-Calais": 62,
    "Puy-de-Dôme": 63,
    "Pyrénées-Atlantiques": 64,
    "Hautes-Pyrénées": 65,
    "Pyrénées-Orientales": 66,
    "Bas-Rhin": 67,
    "Haut-Rhin": 68,
    "Rhône": 69,
    "Haute-Saône": 70,
    "Saône-et-Loire": 71,
    "Sarthe": 72,
    "Savoie": 73,
    "Haute-Savoie": 74,
    "Paris": 75,
    "Seine-Maritime": 76,
    "Seine-et-Marne": 77,
    "Yvelines": 78,
    "Deux-Sèvres": 79,
    "Somme": 80,
    "Tarn": 81,
    "Tarn-et-Garonne": 82,
    "Var": 83,
    "Vaucluse": 84,
    "Vendée": 85,
    "Vienne": 86,
    "Haute-Vienne": 87,
    "Vosges": 88,
    "Yonne": 89,
    "Territoire de Belfort": 90,
    "Essonne": 91,
    "Hauts-de-Seine": 92,
    "Seine-Saint-Denis": 93,
    "Val-de-Marne": 94,
    "Val-d'Oise": 95
}

/* --------------- variables utilisés pour le conteur de la V1 -------------- */

let dep_trouve = 0
const dep_max = Object.keys(dict_dep).length

function majCompteur() {
    document.getElementById("compteur").innerHTML = "Trouvés : " + dep_trouve + " / " + dep_max
}

/* ------------------------- gestion du chronometre ------------------------- */

var min
var sec

function demarrerChrono() {
    document.getElementById("chrono").setAttribute("class", "enMarche")
    min = 10
    sec = 0
    afficherChrono()
    chrono = setInterval(updateTime, 1000)
}

function updateTime () {
    // on enleve une seconde au chronomètre
    sec -= 1
    if (min == 0 && sec == 0){
        finPartie()
    }
    else if (sec < 0){
        sec = 59
        min -= 1
    }

    afficherChrono()
}

function afficherChrono() {
    if (sec < 10) {
        document.getElementById("chrono").innerHTML = min + " : 0" + sec
    }
    else {
        document.getElementById("chrono").innerHTML = min + " : " + sec
    }
}

function finPartie() {
    clearInterval(chrono) //stop le chrono
    Object.keys(dict_dep).forEach(dep =>{  // change de classe les départements non trouvé
        if (document.getElementById(dep).getAttribute("class") === "hide") {
            document.getElementById(dep).setAttribute("class", "lost")
        }
    })
    
    document.getElementById("block-droit").setAttribute("class", "invisible")
    document.getElementById("btn-recommencer").setAttribute("class", "")
}

/* ---------------- afficher le nom des departements trouvés ---------------- */

departements.forEach(function(path) {
    path.addEventListener('mouseleave', function() {
        document.getElementById("nom").innerHTML = ""
    })
    path.addEventListener('mouseenter', function() {
        if (path.getAttribute("class") != "hide"){
            document.getElementById("nom").innerHTML = path.id
        }
    })

});

majCompteur()
INPUT.addEventListener('input', testDep);

/* ----------------- quand la souris est pressé sur la carte ---------------- */

MAP.addEventListener('mousedown', e =>{
    if (CONTAINER.getAttribute("class") == "zoom"){
        MAP.setAttribute("viewBox", "0 0 614 586")
        CONTAINER.setAttribute("class", "")
    }
    else{
        var map_pos = MAP.getBoundingClientRect() // stock les informations de positionnement de la carte
        var coordX = e.clientX - map_pos.left // coord X de la souris relativement à la carte
        var coordY = e.clientY - map_pos.top // coord Y de la souris relativement à la carte
        var newVB = (coordX - 75).toString().concat(" ", coordY - 68.75).concat(" ", "144.07 137.5") // 614 & 586 * 0.23.5 = 144.07 & 137.5 (pour le zoom)
        MAP.setAttribute("viewBox", newVB)
        CONTAINER.setAttribute("class", "zoom")
    }
})

/* ---------------------------- demarrer le quizz --------------------------- */

function demarrerQuizz() {
    // si le quizz n'a encore jamais été lancé
    if (document.getElementById("btn-demarrage").getAttribute("class") == "visible"){
        document.getElementById("btn-demarrage").setAttribute("class", "invisible") // btn-demarrage passe invisible
        document.getElementById("caseRep").setAttribute("class", "")                // caseRep passe visible
    }
    // le quizz a deja été lancé
    else {
        document.getElementById("btn-recommencer").setAttribute("class", "invisible")   // btn-recommencer passe invisible
        document.getElementById("btn-demarrage").setAttribute("class", "invisible")   // btn-demarrage passe invisible
        document.getElementById("block-droit").setAttribute("class", "")                    // case rep passe visible
        
        //remise a zero des élements modifiés pendant la partie
        dep_trouve = 0
        majCompteur()
        Object.keys(dict_dep).forEach(dep =>{ 
            document.getElementById(dep).setAttribute("class", "hide")
        })
    }
    demarrerChrono()
}

/* ----------------- verifie l'input lors de la modification ---------------- */

function testDep(e) {
    // normalize sépare les lettres de leurs accent é => e + '
    // replace(/\p{Diacritic}/gu supprime tous les accents isolés)
    let chaine = e.target.value.normalize('NFD').replace(/\p{Diacritic}/gu, "").replace(/-/ig, " ").toLowerCase()
    Object.keys(dict_dep).every(dep => {
        if ( (chaine == dep.toLowerCase().normalize('NFD').replace(/-/ig, " ").replace(/\p{Diacritic}/gu, "")) && (document.getElementById(dep).getAttribute("class") == "hide") ){
            document.getElementById(dep).setAttribute("class", "show")
            dep_trouve += 1
            INPUT.value = ""
            majCompteur()
            return false
        }
        return true
    })
    
    if (dep_trouve === dep_max){
        finPartie()
    }
}
