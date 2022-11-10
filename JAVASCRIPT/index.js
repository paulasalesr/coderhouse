function togglemenu() {

    let NavList = document.querySelector(".NavList");
    let MenuIcon = document.querySelector (".menu-icon");
    
    NavList.classList.toggle("open");
    MenuIcon.classList.toggle("bx-x")

  }