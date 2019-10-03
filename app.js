
function ml(){
//title = createP('list of links to projects that incluse AI/Math or data sets they demonstrate concept and idias')
// title.position(30,160);
// title.style('font-size','20px')
// title.style('color','rgb(60,20,20)')





projectName=['web scraping','image Classfier','location','OCR','the Heart of Math','','','']
let wp = ['20%','20%','20%','20%','60%','60%','60%','60%']
let hp = ['36%','94%','152%','210%','36%','94%','152%','210%']

skills = createDiv('skills')

var sklist =[
'* java script <br />',
'* css <br />',
'* html <br /> ',
'* node.js <br /> ',
'* python <br /> ',
'* tenserflow <br /> ',
'* firebase <br /> ',
'* mongoDb <br /> ',
].join('\n');

let p = createP(sklist)
//p.child(skills)
p.style('position','absolute')
p.style('width','10%')
p.style('height','60%')
p.style('left','1.8%')
p.style('top','44%')
p.style('color','orange')


skills.style('position','absolute')
skills.style('width','13%')
skills.style('height','70%')
skills.style('left','1%')
skills.style('top','34%')
skills.style('background','rgba(20,20,220,0.3)')
skills.style('opacity','0.9')
skills.style('color','orange')
skills.style('box-shadow', '2px 2px 5px 5px');
skills.style('text-align','center')
skills.style('font-size','1.6em')
skills.style('padding','15px 10px')
skills.style('border-radius','15px')


for(let i = 0; i< 8; i++){

   p[i] = createDiv(projectName[i])
  p[i].style('position','absolute')
  p[i].style('width','35%')
  p[i].style('height','45%')
  p[i].style('left',wp[i])
  p[i].style('top',hp[i])
  //p[i].style('opacity','0.5')
  p[i].style('background','rgba(20,20,220,0.3)')
  p[i].style('opacity','0.9')
  p[i].style('color','orange')
  p[i].style('box-shadow', '2px 2px 5px 5px');

  p[i].style('border-width','thin')
  p[i].style('border-radius','20px')
  p[i].style('border-color','black')
  p[i].style('text-align','center')
  p[i].style('font-size','1.6em')
  p[i].style('padding','15px 10px')
    //p[i].style('z-index','-1')
}
var tar = 'go deeper'
linksAi[0]= createA('https://gopalmasaya-webscrape.glitch.me/',tar,"style")
linksAi[1]= createA('https://gopalmasaya.github.io/waves/',tar,"detect")
linksAi[2]= createA('https://gopalmasaya-makermap.glitch.me/',tar,"heart of math")
linksAi[3]= createA('https://gopalmasaya-simple-tessract-js--1.glitch.me/',tar,"_blank")
linksAi[4]= createA('https://gopalmasaya.github.io/heartOfmath_simulation/',tar,"_blank")

for(let i = 0; i< 5;i++){
  linksAi[i].class('links')
}


let links = selectAll('.links')
let wp1 = ['33.5%','33.5%','33.5%','33.5%','74%']
let hp1 = ['77%','135%','193%','250%','77%']


for(let i = 0; i< 5;i++){

  linksAi[i].position(width/2,480+(i*400))
    links[i].style('left',wp1[i])
    links[i].style('top',hp1[i])
    links[i].style('width','9%')
    links[i].style('height','6%')
    links[i].style('text-decoration','none')
    links[i].style('border-width','1px')
  linksAi[i].style('font-size','18px')
   linksAi[i].style('text-align','center')
   links[i].style('line-height','1.5em')
  linksAi[i].style('display','inline-block')
  links[i].style('background-color','rgba(200,200,220,0.5)')
  links[i].style('color','orange')
  links[i].mouseOver(changeSize)
  links[i].mouseOut(normal)
}
function changeSize(){
  this.style('-webkit-transition','0.4s')
  this.style('width','10%')
  this.style('height','7%')
  this.style('line-height','1.9em')
}
function normal(){
  this.style('-webkit-transition','0.4s')
  this.style('width','9%')
  this.style('height','6%')
  this.style('line-height','1.5em')
}
// on the plant today this app takes any  picture\n and style it acordding to\n
// pretrain model']
var project1 =[
'Ai image classfier can solve many  <br />',
 'problems for us human from health care <br />',
'to the way we drive an more <br /> ',
'this app uses the posenet model <br /> ',
'to analyaze surfers pos <br /> '
].join('\n');

var project4 =[
'OCR is a way to get text  <br />',
 'from image, choose a language <br />',
'load a image file with text <br /> ',
'and see the results <br /> ',
].join('\n');

var project3 =[
'this app demonstrate signup  <br />',
 'throu firebase handling data <br />',
'and use of geolocation api<br /> '
].join('\n');

var project2 =[
  'web scraping have many use cases  <br />',
   'here i demonstrate its use by <br />',
   'getting data from aliexpress <br />',
].join('\n');

var project5 =[
'physics engins are fun  <br />',
 'and you can learn a lot doing them <br />',
'this one is called the heart of Math<br /> ',
'enjoy!!<br /> '
].join('\n');




let aboutProject1 = createP(project1)
aboutProject1.style('position','absolute')
aboutProject1.style('width','20%')
aboutProject1.style('height','15%')
aboutProject1.style('left','33%')
aboutProject1.style('top','103%')
aboutProject1.style('color','white')

let aboutProject2 = createP(project2)
aboutProject2.style('position','absolute')
aboutProject2.style('width','20%')
aboutProject2.style('height','15%')
aboutProject2.style('left','35%')
aboutProject2.style('top','45%')
aboutProject2.style('color','white')
aboutProject2.style('font-size','1.2em')


let aboutProject4 = createP(project4)
aboutProject4.style('position','absolute')
aboutProject4.style('width','20%')
aboutProject4.style('height','15%')
aboutProject4.style('left','33%')
aboutProject4.style('top','220%')
aboutProject4.style('color','white')
aboutProject4.style('font-size','1.2em')

let aboutProject3 = createP(project3)
aboutProject3.style('position','absolute')
aboutProject3.style('width','20%')
aboutProject3.style('height','15%')
aboutProject3.style('left','33%')
aboutProject3.style('top','162%')
aboutProject3.style('color','white')

let aboutProject5 = createP(project5)
aboutProject5.style('position','absolute')
aboutProject5.style('width','20%')
aboutProject5.style('height','15%')
aboutProject5.style('left','75%')
aboutProject5.style('top','45%')
aboutProject5.style('color','white')
aboutProject5.style('font-size','1.2em')



on[3]= true;
}
