const btn = document.querySelector("#nextBtn")
const animationBar = document.querySelector("#animationBar")
const nextEpisodeLoaded = document.querySelector("#status")
const resetBtn = document.querySelector("#reset")
const goNext = document.querySelector("#goNext")


function startAnimation (){ animationBar.classList.add("startAnimation")}


btn.addEventListener("click", ()=>{
    animationBar.classList.remove("startAnimation")
    nextEpisodeLoaded.innerHTML="Næste episode loaded"
})

animationBar.addEventListener("animationend", (event)=>{
    nextEpisodeLoaded.innerHTML="Næste episode loaded"
})

resetBtn.addEventListener("click", ()=>{
    animationBar.classList.remove("startAnimation")
    nextEpisodeLoaded.innerHTML=""
    startAnimation();
})

addEventListener("mouseover", (event) => {
     animationBar.classList.remove("startAnimation")
    nextEpisodeLoaded.innerHTML=""
 })

