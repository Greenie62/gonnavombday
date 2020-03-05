// var h1DOM=document.querySelector(".h1header");

// var h1Text=h1DOM.textContent;

// console.log(h1Text)

// h1DOM.innerHTML=""
// for(let i=0;i<h1Text.length;i++){
//     h1DOM.innerHTML += `<span class='color'>${h1Text[i]}</span>`
// }


var counter=0;
var runInt=setInterval(runIt,200)


function runIt(){
    var spans=document.querySelectorAll(".rotate");
    if(counter >= spans.length){
        console.log("Counter is done")
        clearInterval(runInt)
        circleFunction()
        return;
    }
  
    spans[counter].classList.add('green');
    counter++
}



function circleFunction(){

    var cakeHeader=document.querySelector(".cakeHeader");

    cakeHeader.style.animation='spin 3s forwards'
 
    setTimeout(()=>{
        getGiphy()
        document.querySelector(".output").innerHTML="<h4>Oooooo...gonna vom!</h4>"
    },3000)

}


function getGiphy(){
    var apikey="6gRm9WZ0hk8YcvjvVS4tX2HAAnV5WmgE"
    fetch(`https://api.giphy.com/v1/gifs/search?q=dr+evil+chair&api_key=${apikey}`)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        console.log(res.data[0].images.fixed_height.url)
        document.querySelector(".gif").innerHTML=`<img onclick=upCounter(${res.data}) style=height:125px src=${res.data[4].images.fixed_height.url}>`
    })
}

var counter=0;





