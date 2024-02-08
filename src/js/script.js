const burgerMenu = document.querySelector('#burger-menu');    
// const dropdown = document.querySelectorAll('.dropdown')

function burger() {
        burgerMenu.addEventListener('click', ()=> {
            burgerMenu.classList.toggle('active');

        })
    }
    burger();
    
    let acordionWrap = document.querySelectorAll(".step");
    // for (let item of acordionWrap) {
    //   item.addEventListener("click", function (e) {
    //     this.classList.toggle('active');
    //     // e.currentTarget.classList.toggle('active')
    //   });
    // }
    
    acordionWrap.forEach(function (elemenet) {
      elemenet.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });