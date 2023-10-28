document.addEventListener("DOMContentLoaded", function () {

  function navResponsive() {
   
    const menuIconMobile = document.querySelector("#menu-icon-mobile");
    const menuItemsClass = document.querySelectorAll(".menu-first-item-class");

    menuIconMobile.addEventListener("click", function () {
      document.body.classList.toggle("mobile-menu-active");
    });

    menuItemsClass.forEach(function (menuItem) {
      
      menuItem.addEventListener("click", function () {
        document.body.classList.remove("mobile-menu-active");

        let currentItem = document.querySelector(".active");
        currentItem.classList.remove("active");
        this.classList.add("active");
      });
    });
  }

  navResponsive();

});
