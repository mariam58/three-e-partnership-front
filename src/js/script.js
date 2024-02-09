const burgerMenu = document.querySelector('#burger-menu');    
const mobileDropdown = document.querySelectorAll('.mobile-dropdown');
const accordionItem = document.querySelectorAll(".step");

function burger() {
        burgerMenu.addEventListener('click', ()=> {
            burgerMenu.classList.toggle('active');

        })
    }
    burger();
    
    
  accordionItem.forEach(function (elemenet) {
      elemenet.addEventListener("click", function () {
        this.classList.toggle("active");
        // mobileDropdown.forEach(function (item){
        //   item.classList.toggle('hidden');
        //   // კლასი ყველას ედება
        // })
      });
    });

 

