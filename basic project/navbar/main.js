const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // for chek the class that the element have
  // console.log(links.classList);
  // if the element contains the class (f/t)
  //   console.log(links.classList.contains("usi"));

  // if(links.classList.contains('show-links')){
  //     links.classList.remove('show-links')
  // }else {
  //     links.classList.add('show-links')
  // }
  links.classList.toggle("show-links");
});
