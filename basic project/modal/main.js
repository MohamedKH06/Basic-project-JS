const modalBtn = document.querySelector(".modal-btn");
const overlyBtn = document.querySelector(".modal-overlay ");
const closeBtn = document.querySelector(".close-btn");


modalBtn.addEventListener('click',function(){
    overlyBtn.classList.add('open-modal')
    
})

closeBtn.addEventListener('click',()=>{
    overlyBtn.classList.remove('open-modal'); 
})