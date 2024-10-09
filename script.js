const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      effect: "fade",
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    //   },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 2000)}s`;
        }
      }
    });



  



      var elemc = document.querySelector(".elem-container")
      var fixed = document.querySelector(".fixed-image")
      
      elemc.addEventListener("mouseenter",function(){
          fixed.style.display = "block"
      })
      elemc.addEventListener("mouseleave",function(){
          fixed.style.display = "none"
      })
      
      
      var elems = document.querySelectorAll(".elem")
      elems.forEach(function(e){
          e.addEventListener("mouseenter",function(){
              var image = e.getAttribute("data-image")
              fixed.style.backgroundImage = `url(${image})`
          })
      })