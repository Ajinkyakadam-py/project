let moon = document.getElementsById("moon");
let text = document.getElementsById("text");
let train = document.getElementsById("train");

let desert_moon = documents.getElementsById("desert moon");

let man = documents.getElementsById("man");



window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    moon.style.top = value * .9 + "px";
    text.style.top=80 + value * -0.2 + '%' ;
    train.style.left= value * 1.5 +"px";

    desert_moonstyle.top = value * .3+"px";
    man.style.left = value *.6 + "px"


})
 

let calScrollValue = ()=> {
    let scrollProgress = document.getElementById("progress");
    let pos = document.ducumentElement.scrollTop;
    letcalcheight = documents.documentsElements.scrollHeight - documents.documentsElements.clientheight;
    letscrollvalue = math.round((pos*100)/height);

    if(poss>100){
    scrollProgress.style.display="grid";
}else{
    scrollProgress.style.display="none";
}

    scrollProgress.addEventListener("click",()=>{
        document.documentElements.scrollTop=0;

});
scrollProgress.style.background = 'conic.gradient(#194eb9 ${scrollvalue}%,#67ccff ${scrollvalue}%';
}


window.onscroll = calScrollValue;
window.onload = calScrollValue;
