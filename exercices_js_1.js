/*
 * Ceci est une ardoise JavaScript.
 *
 * Saisissez du code JavaScript, puis faites un clic droit ou sélectionnez à partir du menu Exécuter :
 * 1. Exécuter pour évaluer le texte sélectionné (Ctrl+R),
 * 2. Examiner pour mettre en place un objet Inspector sur le résultat (Ctrl+I), ou,
 * 3. Afficher pour insérer le résultat dans un commentaire après la sélection. (Ctrl+L)
 
 autoriser le collage
 
 /**
* Exercices sur les variables et les fonctions
**/

// ----
// Ecrire une fonction 'hello' qui affiche dans la console "Hello World!"

function hello() {
	console.log("Hello World !")
	  // write your code HERE
  };
  
  // ----
  // écrire des fonctions suivante:
  
  
function addition(a, b){
	return a + b;
  }
  function soustraction(a, b){
	return a -b;
  }
  function multiplication(a, b){
	return a*b;
  }
  function division(a, b){
	return a/b;
  }
  function concatenation(str1, str2){
	return str1 + str2
  }
  function moyenne(a1, a2, a3){
	return (a1*a2)/a3
  }
  
  
  // Chaque fonction devra effectuer l'opération correspondant à son nom, et renvoyer le résultat. 
  // Celui-ci sera stocké dans une variable, qui sera ensuite affichée dans la console
   
  // ----
  // Déclarer deux variables a et b, de valeurs respectives 5 et 12
  // A l'aide d'une variable intermédiaire, inverser les deux valeurs pour que a ait pour valeur 12 et b pour valeur 5
  // Afficher le résultat de a et b dans la console sous la forme d'une phrase: "A vaut : xxx et B vaut yyy"
  var a, b;
  a = 5
  b = 12
  // WRITE YOUR CODE HERE
  
  function a(){
	let c;
	c = a;
	a = b;
	b = c;
	return a,b;
  }
  
  // ----
  // Ecrire une fonction 'isDivisibleBy5' qui reçoit un nombre en paramètre, et qui vérifie que ce nombre est divisible par 5.
  // Cette fonction doit renvoyer un booléen
  var isDivisibleBy5 = function(x) {
	  // WRITE YOUR CODE HERE
	if(x/5>=0){
	  return true;
	}
	return false;
  };
  
  // ----
  // Ecrire une fonction 'isDivisibleByN' qui reçoit deux nombres entiers x et n, et qui vérifie si x est divisible par n.
  // Cette fonction doit renvoyer un booléen
  function isDivisibleByN(x, n) {
	  // WRITE YOUR CODE HERE
	if(x/n>=0){
	  return true;
	}
	return false;
  }
  
  // ----
  // Générer un nombre décimal compris entre 0 et 1, et le stocker dans une variable
  // Changer la valeur de cette variable pour qu'elle vaille le nombre initial arrondi à 2 décimales
  // Afficher dans la console
  function genereEtArrondit() {
	// WRITE YOUR CODE HERE
	let a = Math.random(0,1)
	return a.toPrecision(2)
	
	
  }
  
  
  /**
  * Exercices sur les chaînes de caractères
  **/
  
  // ----
  // Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position 
  // de la première occurence de la lettre 'e' dans cette chaîne
  
  str = "string"
  
  function b(str){
	return str.indexOf("e")
	
  }
  
  // ----
  // Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position 
  // de la dernière occurence de la lettre 'e' dans cette chaîne
  
	function c(str){
  
	 return str.lastIndexOf("e");
	  console.log(str.lastIndexOf("e"))
	}
  
  // ----
  // Ecrire une fonction qui reçoit une chaîne de caractères contenant une prhase entière, 
  // et qui renvoie un tableau contenant chacun des différents mots dans la phrase
  
  
  function d(str){
	
	for(i = 0; i < str.length ; i++){
	  tab [i] =  str.charAt(i);
  
	}
	
  }
  
  
  
  // ----
  // Ecrire une fonction qui reçoit une chaîne de caractère, qui transforme 
  // la première lettre en majuscule, et qui renvoie la nouvelle chaîne
  
	
  function e(str){
	
	for( i=1; i < str.length; i++){
	  s2 += str.charAt(i) 
	}
  
	  return str.charAT(0).toUpperCase()  + s2
  
  
	}
	
	
  
  /**
  * Exercices sur les fonctions natives javascript
  **/
  
  // ----
  // Ecrire une fonction qui stocke vos noms et prénoms dans deux variables firstName et lastName
  // Afficher dans une popup la concaténation des deux
	
	function f(){
	firstName = prompt("Entrez votre prenom")
	lastName = prompt("Entrez votre nom")
	alert( firstName + lastName )
	}
  
  // ----
  // Ecrire une fonction qui respecte les étapes suivantes:
  // Demander à l'utilisateur de saisir une valeur numérique par le biais d'une popup
  // Stocker cette valeur dans une variable
  // Afficher sa valeur dans la console
	
	  function g(){
	val = prompt("Entrez votre chiffre")
	console.log(val )
	}
  
  // ----
  // Ecrire une fonction qui respecte les étapes suivantes:
  // Demander à l'utilisateur de saisir deux valeurs numériques grâce à une popup de saisie
  // L'alerter grâce à une popup si la valeur saisie n'est pas un nombre
  // Afficher dans la console la somme des deux valeurs
  
	  
	function h(){
	a1 = prompt("Entrez votre chiffre ")
	a2 = prompt("Entrez votre chiffre2")
	  if( isNaN(a1 || a2) ){
	alert( "Erreur ce n est pas un nombre")
		
	  }
  
	  res = Number(a1) + Number(a2);
	 console.log( res)
	}
  
	
  
  /**
  * Exercices sur les tableaux
  **/
  
  // ----
  // Ecrire une fonction qui prend en argument un tableau de nombres et en calcule la somme.
  // Valeurs initiales: 
	var numTab = [45, 99, 357, -33, 1, 8, -78];
	function computeSumOfArray(tab) {
	  // WRITE YOUR CODE HERE
	  var sum =0;
	  for(i = 0; i < numTab.length; i++){
		var sum = numTab[i] + sum;
	  }
	  return sum;
	};
  
  /**
  * Exercices sur les structures de contrôles et de boucles
  **/
  
  // ----
  // 1)
  // 	- construire un tableau vide initialement
  // 	- rajouter l'une après l'autre 10 valeurs quelconques (nombres, string) dans ce tableau
  // 	- utiliser une boucle for pour afficher toutes les valeurs du tableau dans la console
  

  function tabVide(){
  var numTab3 = [];
  
  for( i =0; i < 10; i ++){
	numTab3 += prompt("Entrez qqe chose");
  }
  for( i =0; i < 10; i ++){
  
	console.log(numTab3);
  
  }
  
}
  // 2)
  // 	- reprendre le tableau construit précédemment
  // 	- utiliser une boucle while pour afficher toutes les valeurs du tableau dans la console
  
  i=0
  while(i < numTab3.length){
	console.log(numTab3[i])
  }
  

  // ----
  // Ecrire une fonction qui réalise les étapes suivantes:
  // Utiliser une fonction de type 'random' pour générer une liste de nombre aléatoires
  // Utiliser une boucle for, et l'instruction 'if' pour afficher dans la console uniquement les nombres impairs de ce tableau
  
  
  function k (n){
	tab = [];
	for(i=0; i < Number(n); i++){
	a = Math.random(0,1)*10;
	tab[i] = Math.round(a);
	console.log(tab[i])
	}
	for(i=0; i < tab.length; i++){
	  if(tab[i]%2 == 0){
		console.log("Retour")
		console.log(tab[i])
	  }
	}
  }
  
  
  // ----
  // Ecrire une fonction qui réalise les étapes suivantes:
  // Sur 50 itérations:
  //     - générer un entier de façon aléatoire
  //     - si l'entier est divisible par 5, le stocker dans le tableau
  // Afficher avec une boucle for le contenu du tableau dans la console
  
  
	function l (n){
	  tab = [];
	  for(i=0; i < Number(n); i++){
	  a = Math.random(0,1)*100;
	  tab[i] = Math.round(a);
	  console.log(tab[i])
	  }
	  for(i=0; i < tab.length; i++){
		if( tab[i]%5 == 0 ){
		  console.log("Retour")
		  console.log(tab[i])
		}
	  }
	}
  
  
  /**
  * Exercices sur les objets
  **/
  
  // ----
  // Construire un objet :
  // - ayant deux propriéts: nom, prénom
  // - dont les valeurs sont votre nom et votre prénom
  // - rajouter dynamiquement une propriété âge
  // - modifier dynamiquement le prénom de cet objet
  

    

  function Ob () {
    this.nom = "";
    this.prenom = "";

  }

Ob.age = 55
Ob.prenom = "MonPrenom"



  // ----
  // Ecrire une fonction qui reçoit un objet, et qui renvoie la longueur de cet objet 
  var getObjLength = function(obj) {

	return this.getObjLength;
	  // WRITE YOUR CODE HERE
  };
  // Tester cette fonction avec un objet de votre choix que vous aurez écrit
  
  // ----
  // Pour résoudre les exercices précédents vous avez écrit des fonctions.
  // Vous devez maintenant construire un objet ayant plusieurs propriétés dont:
  // - le nom de la propriété s'appelle 'solution_N', où N est le numéro de l'exercice
  // - la valeur de la propriété est la fonction qui résoud l'exercice N
  
  
  
  
  
  
  