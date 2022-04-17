
     const navbar = document.getElementById("menu_humburguer");
     let menuOpen = false;
     let abrir_menu = document.getElementById("menu_esquerdo");

     navbar.addEventListener("click", () => {
     


     if(!menuOpen) {
       navbar.classList.add("open");
       menuOpen = true;
       abrir_menu.style.display = "flex";

     } else {
        navbar.classList.remove("open");
        menuOpen = false;
        abrir_menu.style.display = "none";
     }
    
  });
    
    




 