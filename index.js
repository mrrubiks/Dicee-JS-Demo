var d1, d2;
d1 = Math.floor(Math.random() * 6)+1;
d2 = Math.floor(Math.random() * 6)+1;
img1 = "images/dice" + d1 + ".png";
img2 = "images/dice" + d2 + ".png";
document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2); 
if (d1 > d2) {
    document.querySelector("#title").innerHTML = "🚩Player 1 Wins!";

}
else if (d2 > d1) {
    document.querySelector("#title").innerHTML = "Player 2 Wins!🚩";
}
else {
    document.querySelector("#title").innerHTML = "Draw!";
}
