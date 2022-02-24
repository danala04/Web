var i = 0;
var background = [];
var time = 4000;

background[0] = '/img/jumbo.jpg';
background[1] = '/img/jumbo2.jpg';
background[2] = '/img/jumbo3.jpg';

function slideShow() 
{
    document.getElementById("header").style.backgroundImage = "url(" + background[i] + ")";

    if (i < 2)
    {
        i++;
    } else
    {
        i = 0;
    }
    setTimeout(slideShow, time);
}

window.onload = slideShow;