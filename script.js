const main = document.getElementById('main');
const articleOne = document.createElement('article');
main.appendChild(articleOne);
const sectionOne = document.createElement('section');
sectionOne.id = 'pixels-board';
articleOne.appendChild(sectionOne);

let divList = [1, 2, 3, 4, 5];
let pixelDivList = [1, 2, 3, 4, 5];

function createPixelsBlock(){
    for (let i = 0; i < divList.length; i+=1){
        let div = document.createElement('div');
        div.id = 'pixel-board';
        sectionOne.appendChild(div);
        for (let index2 =0; index2<pixelDivList.length; index2+=1){
            let insideDivs = document.createElement('div');
            insideDivs.className = 'pixel';
            div.appendChild(insideDivs);
        }   
    }
}
createPixelsBlock();


let black = document.querySelector('.black');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');

function addRemoveSelected(event){
    let classeSelect = document.querySelector('.selected');
    classeSelect.classList.remove('selected');
    event.target.classList.add('selected')
}

black.addEventListener('click', addRemoveSelected);
yellow.addEventListener('click', addRemoveSelected);
green.addEventListener('click', addRemoveSelected);
blue.addEventListener('click', addRemoveSelected);

let pixelSelected = document.getElementsByClassName('pixel');
let classSelected = document.getElementsByClassName('selected');
function changePixelColor(){
    for (let i = 0; i < pixelSelected.length; i += 1){
        pixelSelected[i].addEventListener('click', function(event){
            let selectedBackgroundColor = window.getComputedStyle(classSelected[0]);
            if (!event.target.className.backgroundColor === 'white'){
                event.target.style.backgroundColor = 'white';
            } else {
                event.target.style.backgroundColor = selectedBackgroundColor.getPropertyValue('background-color');
            }
        })
    }
}
changePixelColor();