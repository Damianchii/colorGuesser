const spanColors = document.querySelectorAll(".holder-colors span");

const refreshBtn = document.querySelector("[data-refresh]");
const rightColor = document.querySelector("[data-rightColor]");

const header = document.querySelector(".header");

let table = [];

let mainColor;

// Losowanie roznych kolorw spanow
const addRandomColorSpan = function(){
    return `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
}

// Wybieranie głownego koloru do zgadniecia 
const createMainColor = function(){
    mainColor = table[Math.floor(Math.random()*table.length)];
    rightColor.textContent = `${mainColor}`;
}

// Odswiezanie kolorow 

refreshBtn.addEventListener("click", () =>{
    refreshColor();
})

const refreshColor = function(){
    table.splice(0, table.length);
    header.style.backgroundColor = "#333";
    los();
    addRandomColorSpan();
    createMainColor();
}

const los = function (){
    spanColors.forEach(span =>{
        span.style.backgroundColor = addRandomColorSpan();
         
        table.push(span.style.backgroundColor);
        span.addEventListener("click", (e) =>{
    
            if(e.target.style.backgroundColor !== mainColor){
                span.style.backgroundColor = "rgb(125,125,125)";
            }
            if (e.target.style.backgroundColor === mainColor){
                spanColors.forEach(span =>{
                    span.style.backgroundColor = "rgb(125,125,125)";
                    e.target.style.backgroundColor = mainColor;
                    header.style.backgroundColor = mainColor;
                })
                   
    }})

    })

}


los();
createMainColor()
