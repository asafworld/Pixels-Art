const main = document.getElementById('main');
const palette = document.getElementById('color-palette');
const articleOne = document.createElement('article');
main.appendChild(articleOne);
//

const sectionOne = document.createElement('section');
sectionOne.id = 'delete-and-vqv';
articleOne.appendChild(sectionOne);
//

const sectionTwo = document.createElement('section');
sectionTwo.id = 'pixels-board';
articleOne.appendChild(sectionTwo);
//

const pixelSelected = document.getElementsByClassName('pixel');
const classSelected = document.getElementsByClassName('selected');
//

// let black = document.querySelector('.black');
// black.style.backgroundColor = 'black';
// let yellow = document.querySelector('.yellow');
// yellow.style.backgroundColor = 'yellow';
// let green = document.querySelector('.green');
// green.style.backgroundColor = 'green';
// let blue = document.querySelector('.blue');
// blue.style.backgroundColor = 'blue';

function addRemoveSelected(event){
    let classeSelect = document.querySelector('.selected');
    classeSelect.classList.remove('selected');
    event.target.classList.add('selected');
}
palette.addEventListener('click', addRemoveSelected);
// black.addEventListener('click', addRemoveSelected);
// yellow.addEventListener('click', addRemoveSelected);
// green.addEventListener('click', addRemoveSelected);
// blue.addEventListener('click', addRemoveSelected);
// 

function createPixelsBlock(tamanho){
  for (let i = 0; i < tamanho; i+=1){
      const div = document.createElement('div');
      div.id = 'pixel-board';
      sectionTwo.appendChild(div);
      for (let index2 = 0; index2 < tamanho; index2 += 1){
          let insideDivs = document.createElement('div');
          insideDivs.className = 'pixel';
          insideDivs.addEventListener('click', changePixelColor);
          div.appendChild(insideDivs);
      }   
  }
}
createPixelsBlock(5);
// 

function changePixelColor(event){
  const selectedBackgroundColor = window.getComputedStyle(classSelected[0]);
  if (!event.target.className.backgroundColor === 'white'){
      event.target.style.backgroundColor = 'white';
  } else {
      event.target.style.backgroundColor = selectedBackgroundColor.getPropertyValue('background-color');
  }
}
// 

const input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = 1;
sectionOne.appendChild(input);
const vqvButton = document.createElement('button');
vqvButton.id = 'generate-board';
vqvButton.innerHTML = 'VQV';
sectionOne.appendChild(vqvButton);


function vqvButtonFunction(){
  vqvButton.addEventListener('click', function(event){
    let lines = input.value;
    let pixelsBoard = document.getElementById('pixels-board');
    if (lines <= 0) {
      window.alert('Board inválido!');
    } else if (lines <= 4) {
      lines = 5;
      pixelsBoard.innerHTML = '';
      createPixelsBlock(lines);
    } else if (lines >= 51) {
      lines = 50;
      pixelsBoard.innerHTML = '';
      createPixelsBlock(lines);
    } else {
      pixelsBoard.innerHTML = '';
      createPixelsBlock(lines);
    }   
  })       
}
vqvButtonFunction();
// 

const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
clearButton.innerHTML = 'Limpar';
sectionOne.appendChild(clearButton);

clearButton.addEventListener('click', clearButtonFunction);

function clearButtonFunction(){
  for (let i = 0; i < pixelSelected.length; i += 1) {
      pixelSelected[i].style.backgroundColor = 'white';
  }
}

clearButtonFunction
// 

// window.onload = function generateColorsCode(){  
//   let randomColorOne = 0xFFFFFF;
//   let randomNumberOne = Math.floor(Math.random() * randomColorOne);
//   randomNumberOne = randomNumberOne.toString(16);
//   let colorOne = randomNumberOne.padStart(6, 0);
//   console.log(colorOne);
//   yellow.style.backgroundColor = '#' + colorOne;

//   let randomColorTwo = 0xFFFFFF;
//   let randomNumberTwo = Math.floor(Math.random() * randomColorOne);
//   randomNumberTwo = randomNumberTwo.toString(16);
//   let colorTwo = randomNumberTwo.padStart(6, 0);
//   green.style.backgroundColor = '#' + colorTwo;

//   let randomColorThree = 0xFFFFFF;
//   let randomNumberThree = Math.floor(Math.random() * randomColorOne);
//   randomNumberThree = randomNumberThree.toString(16);
//   let colorThree = randomNumberThree.padStart(6, 0);
//   blue.style.backgroundColor = '#' + colorThree;
// }

window.onload = function generateColorsCode(){
  let r = 0;
  let g = 0;
  let b = 0;
  const black = document.createElement('div');
  black.className = 'color selected';
  black.style.backgroundColor = `rgb(${r},${g},${b})`;
  palette.appendChild(black);
  for (let i = 0; i < 3; i +=1){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    const color = document.createElement('div');
    color.className = 'color';
    color.style.backgroundColor = `rgb(${r},${g},${b})`;
    palette.appendChild(color);
  }
}

