var flag = 1
var cir = document.getElementById('circle');
var btn = document.getElementById('btn');
var txt = document.getElementsByTagName('h1');
function dark(){
    btn.className = 'night';
    cir.className = "moon";
    document.body.style.backgroundColor = "rgb(24, 24, 24)";
    txt[0].innerHTML = "Dark mode";
    txt[0].style.color = "white"; 
}
function light(){
    btn.className = 'day';
    cir.className = "sun" ;
    document.body.style.backgroundColor = "white";
    txt[0].innerHTML = "Light mode";
    txt[0].style.color = "black"; 
}
function change(){
    var circle = document.getElementById('circle');
    if(flag==1){
        circle.style.float="Right";
        dark()
        flag=0;
    }
    else{
        circle.style.float="left";
        light();
        flag=1;
    }
    
}