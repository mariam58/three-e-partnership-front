// const { default: Swiper } = require("swiper");


const header = document.querySelector('.header')
const burgerMenu = document.querySelector('#burger-menu');
const dropdownMenu = document.getElementById('nav-container-wrapper')
const dropdownItem = document.querySelectorAll(".navigation-menu-item");
const search = document.querySelector('.search-onclick')
const overlayContant = document.getElementById('overlay');
const DesktopSearch = document.getElementById("desktop-search-btn");


// logo
const whiteLogo = document.querySelector(".logo-white");
const blackLogo = document.querySelector(".logo-black");



function burger() {
        burgerMenu.addEventListener('click', ()=> {
            burgerMenu.classList.toggle('menu-btn');
            dropdownMenu.classList.toggle('dropdown-menu-show');
            dropdownMenu.classList.toggle('h-0')
            header.classList.toggle('bg-black')
            // document.body.classList.toggle('bg-black');
            document.body.classList.toggle('overflow-hidden');

            blackLogo.classList.toggle('hide-logo');
              blackLogo.classList.toggle('hidden');
              whiteLogo.classList.toggle('hidden');
              DesktopSearch.classList.toggle('hidden')
              dropdownMenu.classList.toggle('dropdown-menu-scroll')

        })
    }
    burger();
    
   

 window.addEventListener('resize',function () {
    if (window.outerWidth > 1024) {
      burgerMenu.classList.remove('menu-btn');
      dropdownMenu.classList.remove('dropdown-menu-show');
      header.classList.remove('bg-black')

      // document.body.classList.remove('bg-black');
      document.body.classList.remove('overflow-hidden');
      blackLogo.classList.remove('hide-logo');
        blackLogo.classList.remove('hidden');
        whiteLogo.classList.add('hidden');
        dropdownMenu.classList.remove('dropdown-menu-show');
        dropdownMenu.classList.add('h-0')
        DesktopSearch.classList.remove('hidden')
        dropdownMenu.classList.remove('dropdown-menu-scroll')
    }
} )

    
  dropdownItem.forEach(function (elemenet) {
      elemenet.addEventListener("click", function () {
        // this.classList.toggle("active");
        let mobileDropdown = this.lastChild.previousElementSibling;
        mobileDropdown.classList.toggle('hidden')
        let arrowdown = this.querySelector('.navigation-title-icons')
        arrowdown.classList.toggle('after:icon-up')
      });
    });

         // close search popup


    // Detect all clicks on the document
    overlayContant.addEventListener("click", function(event) {
      // If user clicks inside the element, do nothing
      if (event.target.closest("#overlay-content"))
      return 
      // If user clicks outside the element, hide it!
      else (overlayContant.classList.add("hidden"));
      document.body.classList.remove('overflow-hidden');

    });

     // open search popup

    function openSearch() {
      overlayContant.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
    function closesearch(){
      overlayContant.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');

    }

    //  partners page
const partnersBtn = document.getElementById('partners-btn')
const partnersList = document.getElementById('partners-list')

const associatedBtn = document.getElementById('associated-btn')
const associatedList = document.getElementById('associated-list')



    function openPartners(){
      partnersBtn.classList.toggle('bg-bg-main')
      partnersBtn.classList.toggle('bg-colorsText-blue')
      partnersList.classList.toggle('hidden')
      partnersBtn.classList.toggle('text-white')
      partnersBtn.classList.toggle('text-black')


    }

    function openassociated(){
      associatedBtn.classList.toggle('bg-bg-main')
      associatedBtn.classList.toggle('bg-colorsText-blue')
      associatedBtn.classList.toggle('text-white')
      associatedList.classList.toggle('hidden')
      associatedBtn.classList.toggle('text-black')

    }

// swiper

  new Swiper("#main-swiper", {
    slidesPerView: 1,
    speed: 400,
    effect: "fade",
    autoPlay: 3000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
    
new Swiper("#news-swiper", {
  slidesPerView: 1.19,
  spaceBetween: 24,
  speed: 400,
  loop: true,
  lazyLoading: true,
  autoPlay: 3000,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    430: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

