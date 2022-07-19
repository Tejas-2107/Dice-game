
var p=Math.floor(Math.random()*6+1);
var p1=Math.floor(Math.random()*6+1);
var newImageSrc="images/" + "dice" + p + ".png";
document.querySelector("#p1").setAttribute("src",newImageSrc);
var newImageSrc1="images/" + "dice" + p1 + ".png";
document.querySelector("#p2").setAttribute("src",newImageSrc1);
if(p>p1)
{
    document.querySelector("h1").innerHTML="Player-1 Win🏆";
}
else if(p<p1)
{
    document.querySelector("h1").innerHTML="Player-2 Win🏆";
}
else{
    document.querySelector("h1").innerHTML="Draw🤪"; 
}
