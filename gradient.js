let btn1=document.getElementById("button1")
let btn2=document.getElementById("button2")
let copy=document.querySelector(".copycode")

let hexvalues = () =>{
    let hexcolor="0123456789abcdef"
    let newColor="#"
    for(let i=0;i<6;i++){
        newColor =newColor+hexcolor[Math.floor(Math.random()*16)]
    }
    return newColor;
}
let rgb1="#004773";
let rgb2="#54d542";

let colorchange1= () =>{
    rgb1=hexvalues();
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
    btn1.innerText=`${rgb1}`
    copy.innerText=`background-image: linear-gradient(to right,${rgb1},${rgb2})`
}
let colorchange2= () =>{
    rgb2=hexvalues()
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
    btn2.innerText=`${rgb2}`
    copy.innerText=`background-image: linear-gradient(to right,${rgb1},${rgb2})`
}
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(copy.innerText)
})

btn1.addEventListener("click", colorchange1)
btn2.addEventListener("click", colorchange2)


