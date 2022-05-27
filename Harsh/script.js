
// .......................portfolio section start...........................

const p_btn = document.querySelector(".p-btn");
const p_btns = document.querySelectorAll(".p-btns");
const p_eachImage = document.querySelectorAll(".p-eachImage")

p_btn.addEventListener("click", (e) =>

{

    const p_btn_clicked = e.target;
    if(!p_btn_clicked.classList.contains("p-btns")) return;

    // console.log(p_btn_clicked);

    p_btns.forEach((currElem) => {

        currElem.classList.remove("p-btn-active");


    })

    p_btn_clicked.classList.add("p-btn-active");

    // get the number from data atribute


    const data_number = p_btn_clicked.dataset.pBtn;

    // pBtn = data-p-btn .. dataset is the method to call data.


const image_active = document.querySelectorAll(`.p-btn1--${data_number}`);



p_eachImage.forEach((currElem) => {

currElem.classList.add("p-eachImage-active");

});

image_active.forEach((currElem) => {

    currElem.classList.remove("p-eachImage-active");
})


});


/* <!-- ......................Clients Testimonials................ --> */


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    // to autoplay..........
    autoplay: {

        delay: 2500,
        disableOnInteraction: false,

    },
     //autoplay end..........
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // media query in JS for Client Testimonials

  const widthSize = window.matchMedia("(max-width: 790px)");

 

  const jsmedia = (widthSize) => {

    if(widthSize.matches) 
    {
      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        // to autoplay..........
        autoplay: {
    
            delay: 2500,
            disableOnInteraction: false,
    
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

        

    }
  

  else {

    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      // to autoplay..........
      autoplay: {
  
          delay: 2500,
          disableOnInteraction: false,
  
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


  }
}

jsmedia(widthSize);
  widthSize.addEventListener("change", jsmedia);




//   .............first page scrolling smooth......

// the whole code means that I have a div and added a class inside it after the footer section

const div_html = document.createElement("div");

div_html.classList.add("scroller");

const footer_section = document.querySelector(".footer-section");

div_html.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;

footer_section.after(div_html);

// the whole code means that I have a div and added a class inside it after the footer section

const headerElem = document.querySelector(".header");

const main = document.querySelector(".main");


const scroll_top = () => {

  main.scrollIntoView({ behavior: 'smooth'});

};

div_html.addEventListener("click", scroll_top);

//   .............first page scrolling smooth ends here......





  // Animate counter on scrolling---------------
  const section_counter = document.querySelector(".section-counter");

  const counter_scrolling = new IntersectionObserver((entries, observer) => {

    const [entry] = entries;
    

    if(!entry.isIntersecting) return;

      // .......................Counter section start...........................



  const counter_data = document.querySelectorAll(".counter")

  const speed = 200;

  counter_data.forEach((element) => {

    const updateNumber = () => {

        let counter_number = parseInt(element.dataset.number);
        // console.log(counter_number);
        const initialNum = parseInt(element.innerText);
        // console.log(initialNum);
        const increment = Math.trunc(counter_number/speed);
        
        if(initialNum < counter_number){
            element.innerText = `${initialNum + increment}+ `;
            setTimeout(updateNumber, 10);
        }

        
    }
    updateNumber();


  });

  observer.unobserve(section_counter);

  }, {root: null, threshold: 0,});

  counter_scrolling.observe(section_counter);


//   -----------responsive navbar............


// const headerElem = document.querySelector(".header")
const mobile_icon = document.querySelector(".mobile-navbar")


mobile_icon.addEventListener("click", () => {

  headerElem.classList.toggle("active");

});

//------------------sticky navbar------------

const main_section = document.querySelector(".main-section")

const observeSticky = new IntersectionObserver((entries) => {

const ent = entries[0];
// console.log(ent);

!ent.isIntersecting ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");

}, 

{ root: null, threshold: 0, });

observeSticky.observe(main_section);



// for loading image.....

const imgRef = document.querySelector("img[data-src]");

const lazyImg = (entries) => {

    const [entry] = entries;
    // we have only one data that's why using array destructuring, otherwise we would have used for each loop to change all the image we took reference of..

    if(!entry.isIntersecting) return;
    entry.target.src = imgRef.dataset.src;

}

const imgObserver = new IntersectionObserver(lazyImg, {

root: null,
threshold: 0,

}) 

imgObserver.observe(imgRef);

