//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=5;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Inizia";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Perfetto!! Ottimo lavoro."; messageTime="Il tempo è scaduto."; messageError="Purroppo è sbagliato, riprova."; messageErrorG="Purroppo è sbagliato, riprova."; messageAttempts="Hai esaurito i tentativi a disposizione."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RGVuYXJvXzk="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var m=["c010","c020","c050","c100","c200","cB5"];
var values=[100,200,500,1000,2000,5000];
var tiC=[100,50,30,20,20,10];
var imaH=[0,0,0,0,0,0,0,0,0,0];
var totEuros=0;var totCent=0;var nameEuro="€";var nameCent="Cént.";
var te=["5 EURO","2 EURO E 30 CENTESIMI","3 EURO E 40 CENTESIMI","2 EURO  E 20 CENTESIMI","1 EURO  E 50 CENTESIMI","2 EURO E 10 CENTESIMI","2 EURO E 70 CENTESIMI","4 EURO  E 70 CENTESIMI","4 EURO E 90 CENTESIMI","3 EURO  E 60 CENTESIMI"];var im=["","","","","","","","","",""];var a1=["","","","","","","","","",""];var imalt=["","","","","","","","","",""];
var indexGame=0;var totCentFixed=0; var totEurosFixed=0; var avaiCoins=[];var correct=[];
var ce=[00,300,400,200,500,100,700,700,900,600];var eu=[5000,2000,3000,2000,1000,2000,2000,4000,4000,3000];var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
