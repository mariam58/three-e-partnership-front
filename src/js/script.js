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


              window.onresize = function () {
                let w = window.outerWidth;
                if (w > 1024) {
                  dropdownMenu.classList.remove('dropdown-menu-show');
                  document.body.classList.remove('bg-black');
                }
            };
        })

    }
    burger();
    
   



    
  accordionItem.forEach(function (elemenet) {
      elemenet.addEventListener("click", function () {
        this.classList.toggle("active");

        let mobileDropdown = this.lastChild.previousElementSibling;
        mobileDropdown.classList.toggle('hidden')
        let arrowdown = this.querySelector('.icon-down')
        arrowdown.classList.toggle('icon-up')
      });
    });


    



 

