let btn = document.getElementById("btn");

btn.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "hey content is cgahnging"
})

btn.addEventListener("contextmenu", () => {
    alert("hi context menu")
})

btn.addEventListener("keydown", () => {
    document.querySelector(".box").innerHTML = "hey content is key down"
})


