const burgerMenu = document.querySelector('#burger-menu');
const megaMenu = document.getElementById('menu-container')
// const mobileNav = document.querySelector('#mobile-navigation')    
// const mobileDropdown = document.querySelectorAll('.mobile-dropdown');
const accordionItem = document.querySelectorAll(".step");

function burger() {
        burgerMenu.addEventListener('click', ()=> {
            burgerMenu.classList.toggle('menu-btn');
            megaMenu.classList.toggle('mega-menu-show');
            document.body.classList.toggle('bg-black');
            
          //  if(burgerMenu.classList.contains('active')){
          //   mobileNav.classList.add('mobile-nav', 'acordion-wrap')
          //  }
          //  else {
          //   mobileNav.classList.remove('mobile-nav', 'acordion-wrap')
          //  }
          
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

 

// // Get elements from the DOM
// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu-container');
// const dropdowns = document.querySelectorAll('.dropdown > div');
// const subDropdowns = document.querySelectorAll('.sub-dropdown > div');

// // Toggle variable
// let menuOpen = false;

// // Set click event to menu button
// menuBtn.addEventListener('click', ()=>{
//     // Toggle mega menu show class
//     menu.classList.toggle('mega-menu-show');
//     // If the menu open variable is false
//     if(menuOpen===false){
//         // Set the close icon to the menu button
//         menuBtn.innerHTML=`
//         <span class="material-symbols-outlined">
//             close
//         </span>
//         `;
//         // Set menu open to true
//         menuOpen = true;
//     }
//     else{
//         // Set the menu icon to the menu button
//         menuBtn.innerHTML=`
//         <span class="material-symbols-outlined">
//             menu
//         </span>
//         `;
//         // Set menu open to false
//         menuOpen = false;
//     }
// });

// // Select all dropdowns
// dropdowns.forEach(dropdown=>{
//     // Add click event
//     dropdown.addEventListener("click", (e)=>{
//         // Toggle dropdown menu show class
//         dropdown.nextElementSibling.classList.toggle('menu-show');
//         // Toggle icon rotated class
//         dropdown.lastElementChild.classList.toggle('icon-rotated');
//     });
// });

// // Select all sub dropdowns
// subDropdowns.forEach(subDropdown=>{
//     // Add click event
//     subDropdown.addEventListener('click', (e)=>{
//         // Toggle sub dropdown menu show class
//         subDropdown.nextElementSibling.classList.toggle('sub-menu-show');
//         // Toggle icon rotated class
//         subDropdown.lastElementChild.classList.toggle('icon-rotated');
//     });
// });

