const burgerMenu = document.querySelector('#burger-menu');
const dropdownMenu = document.getElementById('menu-container')
const accordionItem = document.querySelectorAll(".step");

// logo
const whiteLogo = document.querySelector(".logo-white");
const blackLogo = document.querySelector(".logo-black");



function burger() {
        burgerMenu.addEventListener('click', ()=> {
            burgerMenu.classList.toggle('menu-btn');
            dropdownMenu.classList.toggle('dropdown-menu-show');
            document.body.classList.toggle('bg-black');
            blackLogo.classList.toggle('hide-logo');
              blackLogo.classList.toggle('hidden');
              whiteLogo.classList.toggle('hidden');
        })
    }
    burger();
    
   

 window.addEventListener('resize',function () {
    if (window.outerWidth > 1024) {
      burgerMenu.classList.remove('menu-btn');
      dropdownMenu.classList.remove('dropdown-menu-show');
      document.body.classList.remove('bg-black');
      blackLogo.classList.remove('hide-logo');
        blackLogo.classList.remove('hidden');
        whiteLogo.classList.add('hidden');
    }
} )


    
  accordionItem.forEach(function (elemenet) {
      elemenet.addEventListener("click", function () {
        this.classList.toggle("active");

        let mobileDropdown = this.lastChild.previousElementSibling;
        mobileDropdown.classList.toggle('hidden')
        let arrowdown = this.querySelector('.icon-down')
        arrowdown.classList.toggle('icon-up')
      });
    });

    let overlayContant = document.getElementById("myOverlay");
    

    // Detect all clicks on the document
    document.addEventListener("click", function(event) {
      // If user clicks inside the element, do nothing
      if (event.target.closest("#overlay-content"))
      console.log(event.target);
    
      // If user clicks outside the element, hide it!
      else (overlayContant.classList.add("hidden"))
    });
    



 

