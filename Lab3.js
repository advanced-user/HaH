function Write(str, size)
{
    let el = document.getElementById('write_text');
    el.textContent = str;
    el.style.fontSize = size + 'pt';
}

Write("Hello Hello Hello Hello Hello Hello", 10)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

setInterval(function (){
    let y = getRandomInt(1000);
    let x = getRandomInt(1400);

    let el = document.getElementById('img_random_pos');
    el.style.left = x + 'px';
    el.style.top = y + 'px';
}, 1000);

let p = document.getElementsByTagName("p");
for (let i=0; i < p.length; i++)
{
    p[i].style.fontSize = "15pt";
}

let text_clock = document.getElementById('text_clock');
setInterval(function (){
    let time = Number(text_clock.textContent);
    time++;
    text_clock.textContent = String(time);
}, 1000)

let filter = document.getElementById('filter');
setInterval(function (){
    let time = Number(filter.style.opacity);
    time -= 0.1;
    filter.style.opacity = String(time);
}, 500)