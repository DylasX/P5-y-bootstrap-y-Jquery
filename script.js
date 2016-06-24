var x=	0;
var grow;
var osc;
var y= 	0;
var numero3=0;

var colors= [];
var colors1= [];


function setup() {
	delay = new p5.Delay();


	grow=true;

	//createCanvas(800,600);//tamaño del canvas
	createCanvas(windowWidth,windowHeight);
	 colors[0]=color(255,148,73);
 	 colors[1]=color(249,89,11);
	 colors[2]=color(226,39,4);
	 colors[3]=color(55,89,5);
	 colors[4]=color(34,46,22);

	 colors1[0]=color(32,167,249);
 	 colors1[1]=color(28,218,250);
	 colors1[2]=color(146,79,148);
	 colors1[3]=color(254,23,17);
	 colors1[4]=color(170,11,7);











}

function draw() {



	fill(255,3);
	rect(0,0,width,height);
	//background(255);//Borra y coloca solo la ellipse donde esta el mouse

	if (mouseIsPressed) {

		fill(colors1[parseInt(random(5))]);

		//fill(0);//Rellenelo con negro
	}else{
		//fill(255);//Rellene con blanco
		fill(colors[parseInt(random(5))]);
	}






	ellipse(mouseX,mouseY,(numero3),numero3);//Dibuja una ellipse en la posición del mouse




}

$(function(){

  $('h1').bind('click',function(){

    var numero1 = parseInt($('#n1').val());
    var numero2 = parseInt($('#n2').val());
    console.log(numero2);

    numero3 = (numero1 * numero2);
    $('h1').text((numero1 * numero2));



});



});
