
//https://gopalmasaya.github.io/portfolio/

var linksAi = new Array(50);

var links = new Array(20);
var page = 1;
var menue= new Array(10);
var names = ["vision ","embded"," אב טפוס","AI & webApp","צור קשר "]
var on = new Array(10);
var r=0;
var b= 0;
var g= 0;
var step=1;
var content1;
var title ;
var visiontxt;
var p=[];
var bg
var head;
var skills;
var page;
var gitImage;

function preload(){
visiontxt = loadStrings("vision.txt")
bg = loadImage('head2.jpg')
head = loadImage('head2.jpg')

}


function setup() {
var c =	createCanvas(windowWidth, windowHeight*3);
background(65);
image(head,0,0,width,120)
image(bg,0,120,width,1500)



//fill(150,120);rect(0,0,width,160)
fill(217,180,20)
textAlign(CENTER);textSize(70)
text("my portfolio",width/2,90)

let github = createA('https://github.com/gopalMasaya?tab=repositories','gitHub','github')
github.style('position','absolute')
github.style('left','93%')
github.style('height','7.5%')
github.style('height','7.5%')
github.style('background-color','white')
github.style('color','black')
github.style('width','3.5%')
github.style('height','7%')
github.style('border-radius','30px')
github.style('text-align','center')
github.style('line-height','2.6em')
github.style('box-shadow','0px 1px 1px 1px')
github.style('text-decoration','none');
github.style('top','15%');
github.style('font-size','0.85em');

github.mouseOver(change);
github.mouseOut(base);
function change(){
github.style('-webkit-transition','0.4s')
github.style('width','3.7%')
github.style('height','7.2%')
github.style('left','92.5%')
github.style('border-radius','60px')
}

function base(){
	github.style('-webkit-transition','0.4s')
	github.style('width','3.5%')
	github.style('height','7%')
	github.style('left','93%')
	github.style('border-radius','30px')
}

ml();


}


function draw() {
	//background(255)

}
function mousePressed(){
//console.log(linksAi)
// if(menue[0].MouseIsOver()){page=0;console.log(0)}
// if(menue[1].MouseIsOver()){page=1;console.log(1)}
// if(menue[2].MouseIsOver()){page=2;}
// if(menue[3].MouseIsOver()){page=3;console.log(3)}



if(page != 1){
	on[0]=false;
content1 = selectAll('.page1')
for(let i = 0;i< content1.length;i++){
	 content1[i].remove();}
}
if(page != 3 && on[3]==true){
		on[3]=false;
console.log(	on[3])
	//	 title.remove();
// for(let i = 0;i< links.length;i++){
// 	 linksAi[i].remove();}
//
 }
console.log(on[3])


}
