document.getElementById("generate").addEventListener("click", Navigation);
const navBar = document.getElementById("bread");

const bc = [
    { name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];
    


function Navigation() {
  navBar.innerHTML = "";

  bc.forEach((crumb, index) => {
    if (index > 0) navBar.innerHTML += " / ";
  
    if (index === bc.length - 1) {
    
      navBar.innerHTML += crumb.name;
    } else {
    
      navBar.innerHTML += `<a href="${crumb.link}">${crumb.name}</a>`;
    }
  });
}
    
    