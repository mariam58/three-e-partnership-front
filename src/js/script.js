const burgerMenu = document.querySelector('#burger-menu');
const mobileNav = document.querySelector('#mobile-navigation')    
// const mobileDropdown = document.querySelectorAll('.mobile-dropdown');
const accordionItem = document.querySelectorAll(".step");

function burger() {
        burgerMenu.addEventListener('click', ()=> {
            burgerMenu.classList.toggle('active');
           if(burgerMenu.classList.contains('active')){
            mobileNav.classList.add('mobile-nav', 'acordion-wrap')
           }
           else {
            mobileNav.classList.remove('mobile-nav', 'acordion-wrap')
           }
          
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

 

