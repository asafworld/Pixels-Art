const main = document.getElementById('main');
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

let black = document.querySelector('.black');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');

function addRemoveSelected(event){
    let classeSelect = document.querySelector('.selected');
    classeSelect.classList.remove('selected');
    event.target.classList.add('selected');
}

black.addEventListener('click', addRemoveSelected);
yellow.addEventListener('click', addRemoveSelected);
green.addEventListener('click', addRemoveSelected);
blue.addEventListener('click', addRemoveSelected);
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
