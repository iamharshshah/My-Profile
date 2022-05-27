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
