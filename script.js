const dialogue1 = [{ nom: 'Rachel', dialogue: 'Bonjour, Puis-je vous aider?', image: 'img/avatars/receptionniste/content.png' }, { nom: 'Crow', dialogue: 'Bonjour, je suis Crow, le nouveau stagiaire en sécurité.', image: 'img/avatars/crow/content.png' },
{ nom: 'Rachel', dialogue: "Ah, vous pouvez rentrer, David vous attends." , image: 'img/avatars/receptionniste/content.png' }, { nom: 'Crow', dialogue: "Merci, bonne journée!", image: 'img/avatars/crow/content.png' }, { nom: 'Rachel', dialogue: "Merci, à vous aussi... hihi.", image: 'img/avatars/receptionniste/content.png' }];


const dialogue2 = [{ nom: 'David', dialogue: "Bonjour, Crow c'est bien ça?  ", image: 'img/avatars/crow/content.png' }, { nom: 'Crow', dialogue: "Oui c'est bien moi, de qui dois-je m'occuper?", image: 'img/avatars/client/content.png' },
{ nom: 'David', dialogue: "Je vais vous montrer, suivez moi..", image: 'img/avatars/client/content.png' }]

const dialogue3 = [{ nom: 'David', dialogue: 'Ta cible arrive.', image: 'img/avatars/crow/content.png' }, { nom: 'Crow', dialogue: "...Quoi?", image: 'img/avatars/crow/content.png' }]
const dialogue4 = [{nom:'Yassion', dialogue: "Salut je suis Yassion! C'est toi le nouveau stagiaire? Crow c'est ça ? Enchanté!", image:'img/avatars/cible/content.png'},{nom:'Crow', dialogue: "...Enchanté Yassion.", image:'img/avatars/cible/content.png'} ]
let ligne
let indexDialog = 0
let j = 0
let k = 1
let miliSecond = 50
let step = 0
var actuel;
function dialog(dialogue1) {
    blocage = true;
    setTimeout(function () {
        actuel = dialogue1;
        ligne = document.getElementById(`ligne${k}`)
        document.getElementById('perso').src =dialogue1[indexDialog].image
        let texte = dialogue1[indexDialog].nom + ' : ' + dialogue1[indexDialog].dialogue
        ligne.innerHTML += texte[j]
        j++
        if (ligne.offsetWidth >= 620 && k != 3) {
            k++
            if (texte[j] !== ' ') ligne.innerHTML += '-'

        }
        if (document.getElementById('ligne3').offsetWidth >= 620 && k === 3) {
            if (texte[j] != ' ') ligne.innerHTML += '-'

        }
        else if (j <= texte.length - 1)
        
            dialog(actuel)

    }, miliSecond)

}



window.onkeypress = function (e) {
    if (e.key.toLowerCase() == "w") {
        if (document.getElementById(`ligne${k}`).offsetWidth > 1) {
            miliSecond = 10
        }

        if (j >= actuel[indexDialog].dialogue.length - 1) {
            for (l = 1; l <= 3; l++) {
                document.getElementById(`ligne${l}`).innerHTML = ''
            }
            if (actuel[indexDialog + 1]) {
                j = 0
                indexDialog++
                k = 1
                miliSecond = 50
                dialog(actuel)
            } 
        else{
                step++;         
                console.log(5555)
                console.log(step)
                document.getElementById('container-box').style.display= "none"
                blocage = false;
                indexDialog=0;
                
                j=0
                for(l=1; l<=3; l++){
                      document.getElementById(`ligne${l}`).innerHTML='' 
                  }
                if(step==2){
                console.log("step2 ok")
                moveLr(canvasClient,contextClient,imageObjClient,client,block)
                setTimeout(function(){
                    moveLr(canvas,context,imageObj,mainCharacter,block1)
                    moveLeft(canvasClient,contextClient,imageObjClient)
                    setTimeout(function(){
                        moveRight(canvas,context,imageObj)
                        document.getElementById('exclam2').style.display = 'block'
                        setTimeout(() => { document.getElementById('exclam2').style.display = '' }, 1500)
                        dialog(dialogue3)
                        
                        document.getElementById('container-box').style.display = 'flex'
                        
                        
                    },1150)
                    
                },1000)
                }
                if(step==3){
                    moveLeft(canvas,context,imageObj)
                    mainCharacter.colone--;
                    test()
                    moveLeft(canvasClient,contextClient,imageObjClient)
                    client.colone++;
                    test1()
                    setTimeout(function(){document.getElementById('laptop').style.display = "flex"},100)
                    
                    setTimeout(function() {
                        moveLr(canvasVictime, contextVictime, imageObjVictime, victime, {ligne: 13, colone:6})
                    },500)
                    setTimeout(function(){
                        moveRight(canvasVictime, contextVictime, imageObjVictime)
                        victime.colone++;
                        test1()
                        dialog(dialogue4)
                        document.getElementById('container-box').style.display = 'flex'

                    },1500)
                }
                if(step==4){
                    console.log(victime)
                    setTimeout(function(){
                        moveLr(canvasVictime, contextVictime, imageObjVictime, victime, {ligne: 8, colone:6})
                },100)
                setTimeout(function(){moveRight(canvasVictime, contextVictime, imageObjVictime)
                    victime.colone++;
                    test1()
                    setTimeout(function(){moveRight(canvasVictime, contextVictime, imageObjVictime)
                        victime.colone++;
                        test1()
                    },800)
                },800)
                }
            }
        } else if (document.getElementById('ligne3').offsetWidth >= 620 && k === 3) {
            for (l = 1; l <= 3; l++) {
                document.getElementById(`ligne${l}`).innerHTML = ''
            }
            k = 1
            miliSecond = 50
            dialog(actuel)

        }
    }
}

//yass
document.body.onload = createElement;
//creation array x y
let firstTime = true;
let secondTime = true;
let blocage = false;
const array = [];
const y = 31;
const x = 31;
for (var i = 0; i < y; i++) {
    array.push([]);
}
// decoupage au chargement de la page du png :
var canvasPng = document.getElementById('myCanvasPng');
var contextPng = canvasPng.getContext('2d');
var imageObjPng = new Image();

imageObjPng.onload = function () {
    // draw cropped image
    var sourceX = 48;
    var sourceY = 0;
    var sourceWidth = 48;
    var sourceHeight = 48;
    var destWidth = sourceWidth;
    var destHeight = sourceHeight;
    var destX = canvasPng.width / 2 - destWidth / 2;
    var destY = canvasPng.height / 2 - destHeight / 2;
    contextPng.drawImage(imageObjPng, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
};
imageObjPng.src = 'img/avatars/receptionniste/body.png';


// decoupage au chargement de la page du PERSO :
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function () {
    // draw cropped image
    var sourceX = 48;
    var sourceY = 0;
    var sourceWidth = 48;
    var sourceHeight = 48;
    var destWidth = sourceWidth;
    var destHeight = sourceHeight;
    var destX = canvas.width / 2 - destWidth / 2;
    var destY = canvas.height / 2 - destHeight / 2;
    context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
};
imageObj.src = 'img/tiles/hero.png';

//canvas Client

// decoupage au chargement de la page du client :
var canvasClient = document.getElementById('canvasClient');
var contextClient = canvasClient.getContext('2d');
var imageObjClient = new Image();

imageObjClient.onload = function () {
    // draw cropped image
    var sourceX = 48;
    var sourceY = 0;
    var sourceWidth = 48;
    var sourceHeight = 48;
    var destWidth = sourceWidth;
    var destHeight = sourceHeight;
    var destX = canvasClient.width / 2 - destWidth / 2;
    var destY = canvasClient.height / 2 - destHeight / 2;
    contextClient.drawImage(imageObjClient, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
};
imageObjClient.src = 'img/avatars/client/body.png';
// decoupage au chargement de la page du victime :
var canvasVictime = document.getElementById('canvasVictime');
var contextVictime = canvasVictime.getContext('2d');
var imageObjVictime = new Image();

imageObjVictime.onload = function () {
    // draw cropped image
    var sourceX = 48;
    var sourceY = 0;
    var sourceWidth = 48;
    var sourceHeight = 48;
    var destWidth = sourceWidth;
    var destHeight = sourceHeight;
    var destX = canvasVictime.width / 2 - destWidth / 2;
    var destY = canvasVictime.height / 2 - destHeight / 2;
    contextVictime.drawImage(imageObjVictime, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
};
imageObjVictime.src = 'img/avatars/cible/body.png';
// decoupage au chargement de la page du Hugues :
var canvasHugues = document.getElementById('canvasHugues');
var contextHugues = canvasHugues.getContext('2d');
var imageObjHugues = new Image();

imageObjHugues.onload = function () {
    // draw cropped image
    var sourceX = 48;
    var sourceY = 0;
    var sourceWidth = 48;
    var sourceHeight = 48;
    var destWidth = sourceWidth;
    var destHeight = sourceHeight;
    var destX = canvasHugues.width / 2 - destWidth / 2;
    var destY = canvasHugues.height / 2 - destHeight / 2;
    contextHugues.drawImage(imageObjHugues, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
};
imageObjHugues.src = 'img/avatars/employe2/body.png';

// decoupage au chargement de la page du Laura :
var canvasLaura = document.getElementById('canvasLaura');
var contextLaura = canvasLaura.getContext('2d');
var imageObjLaura = new Image();

imageObjLaura.onload = function () {
    // draw cropped image
    var sourceX = 96;
    var sourceY = 144;
    var sourceWidth = 48;
    var sourceHeight = 48;
    var destWidth = sourceWidth;
    var destHeight = sourceHeight;
    var destX = canvasLaura.width / 2 - destWidth / 2;
    var destY = canvasLaura.height / 2 - destHeight / 2;
    contextLaura.drawImage(imageObjLaura, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
};
imageObjLaura.src = 'img/avatars/employe1/body.png';
// decoupage au chargement de la page du Marcus :
var canvasMarcus = document.getElementById('canvasMarcus');
var contextMarcus = canvasMarcus.getContext('2d');
var imageObjMarcus = new Image();

imageObjMarcus.onload = function () {
    // draw cropped image
    var sourceX = 48;
    var sourceY = 0;
    var sourceWidth = 48;
    var sourceHeight = 48;
    var destWidth = sourceWidth;
    var destHeight = sourceHeight;
    var destX = canvasMarcus.width / 2 - destWidth / 2;
    var destY = canvasMarcus.height / 2 - destHeight / 2;
    contextMarcus.drawImage(imageObjMarcus, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
};
imageObjMarcus.src = 'img/avatars/employe3/body.png';

//variable antiRun
var allow = true;
//decoupage dynamique:
function moveDown(canvas, context, imageObj) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imageObj, 0, 0, 48, 48, 0, 0, 48, 48);
    setTimeout(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(imageObj, 96, 0, 48, 48, 0, 0, 48, 48);
        setTimeout(function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(imageObj, 48, 0, 48, 48, 0, 0, 48, 48);
            allow = true;
        }, 50)
    }, 50)

}
function moveLeft(canvas, context, imageObj) {
    console.log("moveLeft")
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imageObj, 0, 48, 48, 48, 0, 0, 48, 48);
    setTimeout(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(imageObj, 96, 48, 48, 48, 0, 0, 48, 48);
        setTimeout(function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(imageObj, 48, 48, 48, 48, 0, 0, 48, 48);
            allow = true;
        }, 50)
    }, 50)

}
function moveRight(canvas, context, imageObj) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imageObj, 0, 96, 48, 48, 0, 0, 48, 48);
    setTimeout(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(imageObj, 96, 96, 48, 48, 0, 0, 48, 48);
        setTimeout(function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(imageObj, 48, 96, 48, 48, 0, 0, 48, 48);
            allow = true;
        }, 50)
    }, 50)

}
function moveUp(canvas, context, imageObj) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imageObj, 0, 144, 48, 48, 0, 0, 48, 48);
    setTimeout(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(imageObj, 96, 144, 48, 48, 0, 0, 48, 48);
        setTimeout(function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(imageObj, 48, 144, 48, 48, 0, 0, 48, 48);
            allow = true;
        }, 50)
    }, 50)

}

//creation object perso + positionnement
var mainCharacter = {
    prenom: "Hero",
    ligne: 28,
    colone: 8
}
//ligne et y -1 par rapport au main
var reception = {
    prenom: "Rachelle",
    ligne: 25,
    colone: 5,
    use: "reception"
}
var client = {
    prenom: "Laurent",
    ligne: 13,
    colone: 11
}
var victime = {
    prenom: "Mike",
    ligne: 8,
    colone: 9
}
var hugues = {
    prenom: "Hugues",
    ligne: 8,
    colone: 17
}
var laura = {
    prenom: "Laura",
    ligne: 16,
    colone: 27
}
var marcus = {
    prenom: "Marcus",
    ligne: 15,
    colone: 27
}
var block = {
    prenom: "block",
    ligne: 13,
    colone: 12
}
var block1 = {
    prenom: "block",
    ligne: 13,
    colone: 11
}


//mapping complet background-image/48px
const tiles = [[{ img: "url('img/tiles/coin.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Cloison_double-coins.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/Bordure_Continue.png')", free: false }, { img: "url('img/tiles/coin1.png')", free: false }],//ligne1
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/evilcorp-hautgauche.png')", free: false }, { img: "url('img/tiles/evilcorp-hautdroit.png')", free: false }, { img: "url('img/tiles/Escalier_Haut.png')", free: true }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: true }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Cloison_millieu1.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//ligne2
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/evilcorp-basgauche.png')", free: false }, { img: "url('img/tiles/evilcorp-basdroit.png')", free: false }, { img: "url('img/tiles/Escalier_Bas.png')", free: true }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/plante-et-mur.png')", free: false }, { img: "url('img/tiles/Cloison_millieu1.png')", free: false }, { img: "url('img/tiles/toit-serveur.png')", free: false }, { img: "url('img/tiles/Big_Serveur_Haut.png')", free: false }, { img: "url('img/tiles/serveur-moyenhaut.png')", free: false }, { img: "url('img/tiles/Big_Serveur_Haut.png')", free: false }, { img: "url('img/tiles/Big_Serveur_Haut.png')", free: false }, { img: "url('img/tiles/Big_Serveur_Haut.png')", free: false }, { img: "url('img/tiles/serveur-moyenhaut.png')", free: false }, { img: "url('img/tiles/Big_Serveur_Haut.png')", free: false }, { img: "url('img/tiles/toit-serveur-mirror.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne3
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol-et-plante.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol-et-plante.png')", free: false }, { img: "url('img/tiles/Cloison_millieu1.png')", free: false }, { img: "url('img/tiles/toit-serveur.png')", free: false }, { img: "url('img/tiles/Big_Serveur_Bas.png')", free: false }, { img: "url('img/tiles/serveur-moyenbas.png')", free: false }, { img: "url('img/tiles/Big_Serveur_Bas.png')", free: false }, { img: "url('img/tiles/Big_Serveur_Bas.png')", free: false }, { img: "url('img/tiles/Big_Serveur_Bas.png')", free: false }, { img: "url('img/tiles/serveur-moyenbas.png')", free: false }, { img: "url('img/tiles/Big_Serveur_Bas.png')", free: false }, { img: "url('img/tiles/toit-serveur-mirror.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne4
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/chaise-face.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/chaise-face.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/chaise-face.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/Cloison_millieu1.png')", free: false }, { img: "url('img/tiles/toit-serveur.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/serveur-moyen-haut.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/serveur-moyen-haut.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/toit-serveur-mirror.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne 5
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bureau-arriere-coingauche.png')", free: false }, { img: "url('img/tiles/bureau-arriere-milieu.png')", free: false }, { img: "url('img/tiles/bureau-arriere-coindroit.png')", free: false }, { img: "url('img/tiles/bureau-arriere-coingauche.png')", free: false }, { img: "url('img/tiles/bureau-arriere-milieu-tablette.png')", free: false }, { img: "url('img/tiles/bureau-arriere-coindroit.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bureau-arriere-coingauche.png')", free: false }, { img: "url('img/tiles/bureau-arriere-milieu.png')", free: false }, { img: "url('img/tiles/bureau-arriere-coindroit.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/Cloison_millieu1.png')", free: false }, { img: "url('img/tiles/toit-serveur.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/serveur-petit-1.png')", free: false }, { img: "url('img/tiles/serveur-moyen-bas.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/serveur-moyen-bas.png')", free: false }, { img: "url('img/tiles/serveur-petit-1.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/toit-serveur-mirror.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne6
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bureau-cote-gauche.png')", free: false }, { img: "url('img/tiles/bureau-milieu-avec-pc.png')", free: false }, { img: "url('img/tiles/bureau-cote-droit.png')", free: false }, { img: "url('img/tiles/bureau-cote-gauche.png')", free: false }, { img: "url('img/tiles/bureau-milieu-avec-pcecran.png')", free: false }, { img: "url('img/tiles/bureau-avec-tourpc.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bureau-cote-gauche.png')", free: false }, { img: "url('img/tiles/bureau-milieu-avec-pc.png')", free: false }, { img: "url('img/tiles/bureau-cote-droit.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/Cloison_millieu1.png')", free: false }, { img: "url('img/tiles/toit-serveur.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/serveur-petit-2.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/serveur-petit-2.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/toit-serveur-mirror.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne7
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/Cloison_millieu1.png')", free: false }, { img: "url('img/tiles/toit-serveur.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/sol.png')", free: false }, { img: "url('img/tiles/toit-serveur-mirror.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne8
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/cloisonT.png')", free: false }, { img: "url('img/tiles/Cloison-Milieu.png')", free: false }, { img: "url('img/tiles/Cloison-Milieu.png')", free: false }, { img: "url('img/tiles/Cloison-Milieu.png')", free: false }, { img: "url('img/tiles/Cloison-fin1.png')", free: false }, { img: "url('img/tiles/dessus-porte.png')", free: false }, { img: "url('img/tiles/Cloison-fin.png')", free: false }, { img: "url('img/tiles/Cloison-Milieu.png')", free: false }, { img: "url('img/tiles/Cloison-Milieu.png')", free: false }, { img: "url('img/tiles/Cloison-Milieu.png')", free: false }, { img: "url('img/tiles/cloison-gap.png')", free: false }],//fin ligne9
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/chaise-face.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/chaise-face.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/chaise-face.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/Cloison_millieu1.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/porte-haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne10
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bureau-arriere-coingauche.png')", free: false }, { img: "url('img/tiles/bureau-arriere-milieu.png')", free: false }, { img: "url('img/tiles/bureau-arriere-coindroit.png')", free: false }, { img: "url('img/tiles/bureau-arriere-coingauche.png')", free: false }, { img: "url('img/tiles/bureau-arriere-milieu.png')", free: false }, { img: "url('img/tiles/bureau-arriere-coindroit.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bureau-arriere-coingauche.png')", free: false }, { img: "url('img/tiles/bureau-arriere-milieu.png')", free: false }, { img: "url('img/tiles/bureau-arriere-coindroit-tablette.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/Cloison_millieu1.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/porte-bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne11
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bureau-cote-gauche.png')", free: false }, { img: "url('img/tiles/bureau-milieu.png')", free: false }, { img: "url('img/tiles/bureau-cote-droit.png')", free: false }, { img: "url('img/tiles/bureau-cote-gauche.png')", free: false }, { img: "url('img/tiles/bureau-milieu-avec-pc.png')", free: false }, { img: "url('img/tiles/bureau-cote-droit.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bureau-cote-gauche.png')", free: false }, { img: "url('img/tiles/bureau-milieu-avec-pcecran.png')", free: false }, { img: "url('img/tiles/bureau-avec-tourpc.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/cloi.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/chaise-side1.png')", free: false }, { img: "url('img/tiles/bureau-side-haut-ordi.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne12
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bureau-side-bas-feuille.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne13
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol-et-plante.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne14
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/chaise-side1.png')", free: false }, { img: "url('img/tiles/bureau-side-haut-ordi.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne15
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bureau-side-bas.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne16
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/feuille-sol.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne17
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol-et-plante.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }],//fin ligne 18
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/angle.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/coin4.png')", free: false }],//fin ligne19
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bordure_right.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }],//fin ligne20
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bordure_right.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }],//fin ligne21
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/Reception-coin.png')", free: false }, { img: "url('img/tiles/Reception-coin.png')", free: false }, { img: "url('img/tiles/Reception-coin.png')", free: false }, { img: "url('img/tiles/Reception-coin.png')", free: false }, { img: "url('img/tiles/Reception-SIDE.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bordure_right.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: true }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: true }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: true }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }],//fin ligne 22
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Reception-SIDE.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/Cloison-fin.png')", free: false }, { img: "url('img/tiles/Cloison-Milieu.png')", free: false }, { img: "url('img/tiles/Cloison-Milieu.png')", free: false }, { img: "url('img/tiles/Cloison-Milieu.png')", free: false }, { img: "url('img/tiles/cloison-gap.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }],//fin ligne23
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Reception-SIDE.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Mur_Haut.png')", free: false }, { img: "url('img/tiles/Distributeur_Haut.png')", free: false }, { img: "url('img/tiles/Distributeur_Haut.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }],//fin ligne24
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Reception-SIDE.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Mur_Bas.png')", free: false }, { img: "url('img/tiles/Distributeur_Bas.png')", free: false }, { img: "url('img/tiles/Distributeur_Bas.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }],//fin ligne25
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Reception-SIDE.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bordure_right.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }],//fin ligne26
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Sol-reception.png')", free: false }, { img: "url('img/tiles/Reception-SIDE.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/canape-face-gauche.png')", free: false }, { img: "url('img/tiles/canape-face-droit.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/bordure_right.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }],//fin ligne27
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/Reception-coin.png')", free: false }, { img: "url('img/tiles/Reception-coin.png')", free: false }, { img: "url('img/tiles/Reception-coin.png')", free: false }, { img: "url('img/tiles/Reception-coin.png')", free: false }, { img: "url('img/tiles/Reception-coin2.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/table-verre-1.png')", free: false }, { img: "url('img/tiles/table-verre-2.png')", free: false }, { img: "url('img/tiles/canape-side.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }],//fin ligne28
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/table-verre-3.png')", free: false }, { img: "url('img/tiles/table-verre-4.png')", free: false }, { img: "url('img/tiles/canape-side-plante.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }],//fin 29
[{ img: "url('img/tiles/bordure_left.png')", free: false }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/sol.png')", free: true }, { img: "url('img/tiles/canape-arriere-gauche.png')", free: false }, { img: "url('img/tiles/canape-arriere-droit.png')", free: false }, { img: "url('img/tiles/sol-et-plante.png')", free: false }, { img: "url('img/tiles/bordure_right.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }],//fin 30
[{ img: "url('img/tiles/coin5.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/angle1.png')", free: false }, { img: "url('img/tiles/sol-entree.png')", free: true }, { img: "url('img/tiles/sol-entree.png')", free: true }, { img: "url('img/tiles/angle.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/bordure_up.png')", free: false }, { img: "url('img/tiles/coin4.png')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }, { img: "url('img/tiles/black.gif')", free: false }]
];

const currentDiv = document.getElementById('map')
function createElement() {
    array.map((elem, index) => {
        var ligneDiv = document.createElement('div');
        ligneDiv.id = index + 1;
        currentDiv.appendChild(ligneDiv)
        for (var i = 0; i < x; i++) {
            elem.push({ colone: i, ligne: index, free: tiles[index][i].free, img: tiles[index][i].img });
            var newDiv = document.createElement("div");
            newDiv.id = elem[i].colone + 1;
            newDiv.style.backgroundImage = elem[i].img;
            newDiv.style.backgroundSize = "100%";
            newDiv.style.backgroundRepeat = "cover";
            ligneDiv.appendChild(newDiv);
        }

    })
}
var map=document.getElementById("map");
var png=document.getElementById("myCanvasPng")
var useObject=false;

//positionnement de la map par rapport au perso au spawn

var middleY = Math.round(y / 2);
var middleX = Math.round(x / 2);

var calc = document.getElementById("calc");

//resize map for perso each movements
function test() {
    map.style.top = 'calc(50% - ' + ((mainCharacter.ligne - middleY) * 48) + 'px)';
    map.style.left = 'calc(50% - ' + ((mainCharacter.colone - middleX) * 48) + 'px)';
    calc.style.top = 'calc(50% - ' + ((mainCharacter.ligne - middleY) * 48) + 'px)';
    calc.style.left = 'calc(50% - ' + ((mainCharacter.colone - middleX) * 48) + 'px)';
}
test();
//positionnement png spawn
function test1() {
    png.style.top = '48' * reception.ligne + 'px';
    png.style.left = '48' * reception.colone + 'px';
    canvasClient.style.top = '48' * client.ligne + 'px';
    canvasClient.style.left = '48' * client.colone + 'px';
    canvasVictime.style.top = '48' * victime.ligne + 'px';
    canvasVictime.style.left = '48' * victime.colone + 'px';
    canvasHugues.style.top = '48' * hugues.ligne + 'px';
    canvasHugues.style.left = '48' * hugues.colone + 'px';
    canvasLaura.style.top = '48' * laura.ligne + 'px';
    canvasLaura.style.left = '48' * laura.colone + 'px';
    canvasMarcus.style.top = '48' * marcus.ligne + 'px';
    canvasMarcus.style.left = '48' * marcus.colone + 'px';
}
test1();
//resize map for png
//direction

window.onkeydown = function (e) {
    if (blocage == false) {
        console.log(blocage)
        switch (e.key) {
            case "ArrowUp":
                console.log(mainCharacter.ligne)
                if ((tiles[mainCharacter.ligne - 2][mainCharacter.colone - 1].free) && (reception.ligne != mainCharacter.ligne - 1 || reception.colone != mainCharacter.colone)) {
                    if (allow) {
                        allow = false;
                        mainCharacter.ligne--;
                        moveUp(canvas, context, imageObj);
                        test();
                    }
                }
                else {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(imageObj, 48, 144, 48, 48, 0, 0, 48, 48);
                }
                if (tiles[mainCharacter.ligne - 2][mainCharacter.colone - 1].use || (reception.ligne == mainCharacter.ligne - 1 && reception.colone == mainCharacter.colone)) {
                    useObject = ((reception.ligne == mainCharacter.ligne - 1 && reception.colone == mainCharacter.colone) ? reception.use : tiles[mainCharacter.ligne - 2][mainCharacter.colone - 1].use);
                    document.getElementById("msg").innerHTML = "Appuie sur F pour intéragir !";
                    setTimeout(function () {
                        document.getElementById("msg").innerHTML = "";
                    }, 2000);
                } else {
                    useObject = false;
                }
                break;
            case "ArrowDown":
                if (tiles[mainCharacter.ligne][mainCharacter.colone - 1].free && (reception.ligne != mainCharacter.ligne + 1 || reception.colone != mainCharacter.colone)) {
                    if (allow) {
                        allow = false;
                        mainCharacter.ligne++;
                        moveDown(canvas, context, imageObj);
                        test();
                    }
                }
                else {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(imageObj, 48, 0, 48, 48, 0, 0, 48, 48);
                }
                if (tiles[mainCharacter.ligne][mainCharacter.colone - 1].use || (reception.ligne == mainCharacter.ligne + 1 && reception.colone == mainCharacter.colone)) {
                    useObject = ((reception.ligne == mainCharacter.ligne + 1 && reception.colone == mainCharacter.colone) ? reception.use : tiles[mainCharacter.ligne][mainCharacter.colone - 1].use);
                    document.getElementById("msg").innerHTML = "Appuie sur F pour intéragir !";
                    setTimeout(function () {
                        document.getElementById("msg").innerHTML = "";
                    }, 2000);
                } else {
                    useObject = false;
                }
                break;
            case "ArrowLeft":
                if (tiles[mainCharacter.ligne - 1][mainCharacter.colone - 2].free && (reception.ligne != mainCharacter.ligne || reception.colone != mainCharacter.colone - 1)) {
                    if (allow) {
                        allow = false;
                        mainCharacter.colone--;
                        moveLeft(canvas, context, imageObj);
                        test();
                    }
                }
                else {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(imageObj, 48, 48, 48, 48, 0, 0, 48, 48);
                }
                if (tiles[mainCharacter.ligne - 1][mainCharacter.colone - 2].use || (reception.ligne == mainCharacter.ligne && reception.colone == mainCharacter.colone - 1)) {
                    useObject = ((reception.ligne == mainCharacter.ligne && reception.colone == mainCharacter.colone - 1) ? reception.use : tiles[mainCharacter.ligne - 1][mainCharacter.colone - 2].use);
                    document.getElementById("msg").innerHTML = "Appuie sur F pour intéragir !";
                    setTimeout(function () {
                        document.getElementById("msg").innerHTML = "";
                    }, 2000);
                } else {
                    useObject = false;
                }
                break;
            case "ArrowRight":
                if (tiles[mainCharacter.ligne - 1][mainCharacter.colone].free && (reception.ligne != mainCharacter.ligne || reception.colone != mainCharacter.colone + 1)) {
                    if (allow) {
                        allow = false;
                        mainCharacter.colone++;
                        moveRight(canvas, context, imageObj)
                        test();
                    }
                } else {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(imageObj, 48, 96, 48, 48, 0, 0, 48, 48);
                }
                if (tiles[mainCharacter.ligne - 1][mainCharacter.colone].use || (reception.ligne == mainCharacter.ligne && reception.colone == mainCharacter.colone + 1)) {
                    useObject = ((reception.ligne == mainCharacter.ligne && reception.colone == mainCharacter.colone + 1) ? reception.use : tiles[mainCharacter.ligne - 1][mainCharacter.colone].use);
                    document.getElementById("msg").innerHTML = "Appuie sur F pour intéragir !";
                    setTimeout(function () {
                        document.getElementById("msg").innerHTML = "";
                    }, 2000);
                } else {
                    useObject = false;
                }
                break;
            case "f":
                if (useObject) {
                    switch (useObject) {
                        case "ordinateur":
                            break;
                        case "reception":
                            if (step == 0) {
                                dialog(dialogue1)
                            } else if (step == 1) {
                                dialog(dialogue2);
                            } else if (step == 2) {
                                dialog(dialogue3)

                            }
                    }
                }
            default:
                break;

        }



        if (mainCharacter.ligne == 25 && firstTime == true) {
            console.log("1",step)
            blocage = true;
            moveRight(myCanvasPng, contextPng, imageObjPng);
            document.getElementById('exclam').style.display = 'block'
            setTimeout(() => { document.getElementById('exclam').style.display = '' }, 500)
            setTimeout(() => {
                moveLeft(canvas, context, imageObj)
                dialog(dialogue1)
                document.getElementById('container-box').style.display = 'flex'
                console.log("2",step)
            }, 300)

            firstTime = false;
        }
        if (mainCharacter.ligne == 18 && secondTime == true) {
            blocage = true;
            moveLr(canvasClient,contextClient,imageObjClient,client,mainCharacter)
            moveRight(canvas,context,imageObj)
            setTimeout(function (){
                moveLeft(canvasClient,contextClient,imageObjClient);
                dialog(dialogue2)
                console.log(dialog(dialogue2))
                document.getElementById('container-box').style.display = 'flex'

            },2000)
            

            secondTime= false;
        }


        }
    }

    function moveUd(canvas, context, imageObj,depart,arrive) {
        let feet2 = arrive.ligne - depart.ligne
        m = 1
        if (feet2 < 0) {
            feet2 = Math.abs(feet2)
            let interval = setInterval(function () {
                moveUp(canvas, context, imageObj)
                depart.ligne--;
                if(depart==mainCharacter){
                    test()
                    m++
                }
                else{
                    test1();
                    m++
                }
                
                if (m == feet2+1) {
                    
                    clearInterval(interval)
                    m = 1
                }
            }, 100)
        }
        else {
            let interval = setInterval(function () {
                moveDown(canvas, context, imageObj)
                depart.ligne++;
                if(depart==mainCharacter){
                    test()
                    m++
                }
                else{
                    test1();
                    m++
                }
                
                if (m == feet2+1) {
                    console.log("ok")
                    clearInterval(interval)
                    m = 1
                }
            }, 100)
        }

    }
    function moveLr(canvas, context, imageObj,depart,arrive) {
        setTimeout(function () {
            let feet = arrive.colone - depart.colone
            console.log(depart,arrive)
            m = 1
            if (feet < 0) {
                feet = Math.abs(feet)
                let interval = setInterval(function () {
                    moveLeft(canvas, context, imageObj);
                    depart.colone--;
                    if(depart==mainCharacter){
                        test()
                        m++
                    }
                    else{
                        test1();
                        m++
                    }
                    
                
                    if (m == feet) {
                        clearInterval(interval)
                        m = 1
                        setTimeout(() => {moveUd(canvas,context,imageObj,depart,arrive)}, 50)
                    }
                    console.log(m)
                }, 100)

            }
            else {
                let interval = setInterval(function () {
                    moveRight(canvas, context, imageObj);
                    depart.colone++;
                    if(depart==mainCharacter){
                        test()
                        m++
                    }
                    else{
                        test1();
                        m++
                    }
                    
                    if (m == feet) {
                        clearInterval(interval)
                        m = 1
                        setTimeout(() => {moveUd(canvas,context,imageObj,depart,arrive)}, 50)
                    }
                }, 100)
            }
        }, 100)
    }

    function animation1() {
        moveUp(canvasPng, contextPng, imageObjPng);
        reception.ligne--;
        test1();
        mainCharacter.ligne--;
        moveUp(canvas, context, imageObj);
        test();
        setTimeout(function () {
            moveUp(canvasPng, contextPng, imageObjPng);
            reception.ligne--;
            test1();
            mainCharacter.ligne--;
            moveUp(canvas, context, imageObj);
            test();
            setTimeout(function () {
                moveUp(canvasPng, contextPng, imageObjPng);
                reception.ligne--;
                test1();
                mainCharacter.ligne--;
                moveUp(canvas, context, imageObj);
                test();
                setTimeout(function () {
                    moveRight(canvasPng, contextPng, imageObjPng);
                    reception.colone++;
                    test1();
                    mainCharacter.colone++;
                    moveRight(canvas, context, imageObj);
                    test();
                }, 100)
            }, 100)

        }, 100)



    }




//--------------------------INTERFACE-PC---------------------------//


//drag N drop bureau
function jjj () {
    var storage = {};
    let top = 5;
    function init() {

        var elements = document.querySelectorAll('.dossier'),
            elementsLength = elements.length;
        for (var i = 0; i < elementsLength; i++) {
            elements[i].style.top = top + 'px'
            top += 135;

            elements[i].addEventListener('mousedown', function (e) {
                console.log('1')

                var s = storage;
                s.target = e.target;
                s.offsetX = e.clientX - s.target.offsetLeft;
                s.offsetY = e.clientY - s.target.offsetTop;
            });
            elements[i].addEventListener('mouseup', function () {
                console.log('2')

                storage = {};
            });
        }

        document.addEventListener('mousemove', function (e) {
            var target = storage.target;

            if (target) {
                target.style.top = e.clientY - storage.offsetY + 'px';
                target.style.left = e.clientX - storage.offsetX + 'px';
            }
        });
    }
    init();
    //drag n drop fenetre

    var stock = {};
    function moveFold() {
        console.log('ke rentre dans moveFold')
        var objet = document.querySelectorAll('.folderDrop'),
            objetLength = objet.length;
            console.log(objet);
        for (var i = 0; i < objetLength; i++) {
            objet[i].addEventListener('mousedown', function (e) {
                var s = stock;
                s.target = e.target;
                s.offsetX = e.clientX - s.target.offsetLeft;
                s.offsetY = e.clientY - s.target.offsetTop;
            });
            objet[i].addEventListener('mouseup', function () {
                stock = {};

            });
        }

        document.addEventListener('mousemove', function (e) {
            var target = stock.target;

            if (target) {
                target.style.top = e.clientY - stock.offsetY + 'px';
                target.style.left = e.clientX - stock.offsetX + 'px';


            }
        });
    }
    moveFold();


} jjj();





let priority= 4;


function existeDoc(){
    document.getElementById('petitDocument').className='folderDrop'
    document.getElementById('petitDocument').style.zIndex=priority;
    priority ++;
    document.getElementById('petitDocument').style.display='flex';
}


function existePhoto(){
    document.getElementById('petitPhoto').className='folderDrop'
    document.getElementById('petitPhoto').style.zIndex=priority;
    priority ++;
    document.getElementById('petitPhoto').style.display='flex';


}

function existeNoodle(){
    document.getElementById('noodle').className='folderDrop'
    document.getElementById('noodle').style.zIndex=priority;
    priority ++;
    document.getElementById('noodle').style.display='flex';
    console.log('yes')
}


function grandDoc(){
    let taille1= document.getElementById('petitDocument')
    let taille2= document.getElementById('petitGauche')
    let taille3= document.getElementById('petitDroite')
    let taille4 = document.getElementById('petitPetitDroite')
    if(taille1.className != 'grand' && taille2.className != 'grandGauche' && taille3.className != 'grandDroite' 
    && taille4.className != 'grandPetiteDroite' )
    {
        taille1.className = 'grand'
        taille2.className = 'grandGauche'
        taille3.className = 'grandDroite'
        taille4.className = 'grandPetiteDroite'
        document.getElementById('trash').style.display ='none';
        document.getElementById('tof').style.display ='none';
        document.getElementById('projo').style.display ='none';
        document.getElementById('button').style.display ='none';
        
    }else {
        taille1.className = 'folderDrop'
        taille2.className = 'gauche'
        taille3.className = 'droite'
        taille4.className = 'petiteDroite'
        document.getElementById('trash').style.display ='block';
        document.getElementById('tof').style.display ='block';
        document.getElementById('projo').style.display ='block';
        document.getElementById('button').style.display ='block';
    }

}

function closeDoc(){
    document.getElementById('petitDocument').style.display='none'
    document.getElementById('petitDocument').className='folderDrop';
    document.getElementById('petitGauche').className = 'gauche'
    document.getElementById('petitDroite').className = 'droite'
    document.getElementById('petitPetitDroite').className = 'petiteDroite'
    document.getElementById('trash').style.display ='block';
    document.getElementById('tof').style.display ='block';
    document.getElementById('projo').style.display ='block';
    document.getElementById('button').style.display ='block';
}


function grandPhoto(){
    let taille1= document.getElementById('petitPhoto')
    let taille2= document.getElementById('petitGauche2')
    let taille3= document.getElementById('petitDroite2')
    let taille4 = document.getElementById('petitPetitDroite2')
    if(taille1.className != 'grand' && taille2.className != 'grandGauche' && taille3.className != 'grandDroite' 
    && taille4.className != 'grandPetiteDroite' )
    {
        taille1.className = 'grand'
        taille2.className = 'grandGauche'
        taille3.className = 'grandDroite'
        taille4.className = 'grandPetiteDroite'
        document.getElementById('trash').style.display ='none';
        document.getElementById('tof').style.display ='none';
        document.getElementById('projo').style.display ='none';
        document.getElementById('button').style.display ='none';
    
    
    }else {
        taille1.className = 'folderDrop'
        taille2.className = 'gauche'
        taille3.className = 'droite'
        taille4.className = 'petiteDroite'
        document.getElementById('trash').style.display ='block';
        document.getElementById('tof').style.display ='block';
        document.getElementById('projo').style.display ='block';
        document.getElementById('button').style.display ='block';
    }

}

function closePhoto(){
    document.getElementById('petitPhoto').style.display='none'
    document.getElementById('petitPhoto').className='folderDrop';
    document.getElementById('petitGauche2').className='gauche'
    document.getElementById('petitDroite2').className = 'droite'
    document.getElementById('petitPetitDroite2').className = 'petiteDroite'
    document.getElementById('trash').style.display ='block';
    document.getElementById('tof').style.display ='block';
    document.getElementById('projo').style.display ='block';
    document.getElementById('button').style.display ='block';

}

function grandInternet() {
    let taille1= document.getElementById('noodle')
    let taille2= document.getElementById('petitMillieu')

    if(taille1.className != 'grand' && taille2.className != 'grandGauche'  )
    {
        taille1.className = 'grand'
        taille2.className = 'grandMillieu'
        document.getElementById('trash').style.display ='none';
        document.getElementById('tof').style.display ='none';
        document.getElementById('projo').style.display ='none';
        document.getElementById('button').style.display ='none';
    
    
    }else {
        taille1.className = 'folderDrop'
        taille2.className = 'millieu'
        document.getElementById('trash').style.display ='block';
        document.getElementById('tof').style.display ='block';
        document.getElementById('projo').style.display ='block';
        document.getElementById('button').style.display ='block';
    }


}
function closeInternet(){
    document.getElementById('noodle').style.display='none'
    document.getElementById('noodle').className='folderDrop';
    document.getElementById('petitMillieu').className='millieu'
    document.getElementById('trash').style.display ='block';
    document.getElementById('tof').style.display ='block';
    document.getElementById('projo').style.display ='block';
    document.getElementById('button').style.display ='block';

}