/**/
const p = document.getElementById('p');
const splitWords = p.innerHTML.split(' ');
const highlightedWords = splitWords.map((word) =>
  word.length > 6 ? `<span class="highlight">${word}</span>` : word);
const joinedWords = highlightedWords.join(' ');

p.innerHTML = joinedWords;


/**/
var temp_link = document.createElement("a");
temp_link.href = "https://forcemipsum.com/";
temp_link.target = '_blank';
temp_link.innerHTML = "link";

var text = document.createTextNode("the link : ");

var par = document.createElement("p");
par.appendChild(text);
par.appendChild(temp_link);

document.getElementById("main_div").appendChild(par);



/**/
function myFunction() {
    let text = document.getElementById("p").innerHTML; 
    document.getElementById("p").innerHTML = text.replace(/!/g,"&#128562");
  }
function myFunctioneee(){
     let xt = document.getElementById("p").innerHTML;
    document.getElementById("p").innerHTML = xt.replace(/\?/g,"&#129300");
  }
  const word = document.getElementById("p").innerHTML; 
  document.getElementById("p").innerHTML=word.split(/\./);


  /**

const len=document.getElementById("p");
let counter=0;
for(let i=0;i<len.length;i++){
    if(len.charAt(i)==' '){
        counter++;
    }
}
document.getElementById("demo").innerHTML = counter;*/