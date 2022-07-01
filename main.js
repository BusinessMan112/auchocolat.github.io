let font,
  fontsize = 150;

function preload() {
    // Ensure the .ttf or .otf font stored in the assets directory
    // is loaded before setup() and draw() are called
    font = loadFont('assets/SunnyspellsRegular-MV9ze.otf');
    let menuPage = document.getElementById("menuPage")
    let reservationPage = document.getElementById("reservationPage")
    
    menuPage.style.display = "none"
    reservationPage.style.display = "none"
  }

function setup() {
    createCanvas(800, 400);
    textFont(font);
    textSize(fontsize);
    textAlign(CENTER, CENTER);
    textStyle(BOLD)
  }
  

function draw() {

    fill("#8b4513")
    stroke(255)
    text("au", 400, 100)
    text("Chocolat", 400, 200)
}

menuShowing = false
function menu(){
    let menuPage = document.getElementById("menuPage")
    let reservationPage = document.getElementById("reservationPage")


    if(menuShowing){
        menuPage.style.display = "none"
        menuShowing = false
    }else{
        if(reservationPageShowing){
            reservationPage.style.display = "none"
            reservationPageShowing = false
        }
        menuPage.style.display = "inline-block"
        menuShowing = true   
    }
}

function homePage(){
    let menuPage = document.getElementById("menuPage")
    let reservationPage = document.getElementById("reservationPage")
    
    menuPage.style.display = "none"
    reservationPage.style.display = "none"
}

reservationPageShowing = false
function reservationPage(){
    let menuPage = document.getElementById("menuPage")
    let reservationPage = document.getElementById("reservationPage")
    
    reservationPage.style.display = "inline-block"
    if(reservationPageShowing){
        if(menuShowing){
            menuPage.style.display = "none"
            menuShowing = false
        }
        reservationPage.style.display = "none"
        reservationPageShowing = false
    }else{
        if(menuShowing){
            menuPage.style.display = "none"
            menuShowing = false
        }
        reservationPage.style.display = "inline-block"
        menuPage.style.display = "none"
        reservationPageShowing = true
    }
}