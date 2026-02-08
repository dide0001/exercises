document.addEventListener("mousemove", (event) => {
    const x = event.clientX 
    let colorValue = (x / window.innerWidth) * 255
    document.body.style.backgroundColor  = `rgb(${colorValue}, 100, 150)`
 })
