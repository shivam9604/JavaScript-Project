let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");



const hexValues = () => {
    let myHexValues = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors = colors + myHexValues[Math.floor(Math.random()*16)];
        
    }
    return colors;
};

var rgb1 = hexValues();
var rgb2 = hexValues();

function handleButton1() {
    rgb1 = hexValues();
    console.log(rgb1);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`

    copyDiv.innerHTML = `background-Image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}

const handleButton2 = () => {
    rgb2 = hexValues();
    console.log(rgb2);
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to left, ${rgb2}, ${rgb1})` ;
    copyDiv.innerHTML = `background-Image: linear-gradient(to right, ${rgb1}, ${rgb2})`;


};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
});



