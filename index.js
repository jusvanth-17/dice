var randomnumber1 =Math.floor(Math.random()*6)+1;
var randomimage1 = "images/dice"+randomnumber1+".png";
var image =document.querySelectorAll("img")[0];
image.setAttribute("src",randomimage1);


var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage2="images/dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);


if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnumber2>randomnumber1)
{
  document.querySelector("h1").innerHTML="player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}
