
     const navbar = document.getElementById("menu_humburguer");
     let menuOpen = false;
     let abrir_menu = document.getElementById("menu_esquerdo");



function agradecimentos(){
     document.getElementById("agradecimentos").style.display = "inline";
     document.getElementById("body").style.overflow = "hidden";
  }
function fechar_msgn(){
    
   document.getElementById("agradecimentos").style.display = "none";
   document.getElementById("body").style.overflow = "scroll";
}

     navbar.addEventListener("click", () => {
     



     if(!menuOpen) {                 // menuOpen é falso, execute a caixa
       navbar.classList.add("open");
       menuOpen = true;
       abrir_menu.style.display = "flex";

     } else {                         // se menuOpen não for igual a false, execute a caixa
        navbar.classList.remove("open");
        menuOpen = false;
        abrir_menu.style.display = "none";
     }
    

    
  });
   


    




 