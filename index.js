let addBtn_1 = document.getElementById("btn_1")
let addBtn_2 = document.getElementById("btn_2")
let img = document.getElementById("img1")

addBtn_1.addEventListener('click', btn_1)
addBtn_2.addEventListener('click', btn_2)

function btn_1(){
    addBtn_1.style.backgroundColor = "white"
    addBtn_2.style.backgroundColor = "transparent"
    img.src = "image/fashion1.jpg"
}

function btn_2(){
    addBtn_2.style.backgroundColor = "white"
    addBtn_1.style.backgroundColor = "transparent"
    img.src = "image/fashion2.png"
    setTimeout(()=>{btn_1()}, 4000)
}

let btnPrev = document.getElementById("owl-prev")
let btnNext = document.getElementById("owl-next")
let lazyRaw1 = document.querySelector(".lazy-raw-1")
let lazyRaw2 = document.querySelector(".lazy-raw-2")
let lazyRaw3 = document.querySelector(".lazy-raw-3")
btnPrev.addEventListener('click', prev)
function prev() {
    lazyRaw1.style.transform = "translateX(-430px)"
    lazyRaw2.style.transform = "translateX(-430px)"
    lazyRaw3.style.transform = "translateX(-430px)"
}
