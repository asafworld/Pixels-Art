let main = document.getElementById("main");
// 
let articleOne = document.createElement("article");
main.appendChild(articleOne);
// 
let sectionOne = document.createElement("section");
sectionOne.id = "pixels-board";
articleOne.appendChild(sectionOne);
// 

// 
let divList = [1, 2, 3, 4, 5];
let pixelDivList = [1, 2, 3, 4, 5];

function createPixelsBlock(){
    for (let i = 0; i < divList.length; i+=1){
        let div = document.createElement("div");
        div.id = "pixel-board";
        sectionOne.appendChild(div);
        for (let index2 =0; index2<pixelDivList.length; index2+=1){
            let insideDivs = document.createElement("div");
            insideDivs.className = "pixel";
            div.appendChild(insideDivs);
        }
        
    }
    console.log(divList);
    
}
createPixelsBlock();

