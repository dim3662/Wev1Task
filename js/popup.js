var send=document.querySelector(".sendJS");
var formLogin=document.querySelector(".formLogin");
var closeFormLogin=document.querySelector(".closeFormLogin");
var overlay =document.querySelector(".overlay");
send.addEventListener("click",function (event) {
    event.preventDefault();
    formLogin.classList.add("showPopup");
    overlay.classList.add("showPopup");
})
closeFormLogin.addEventListener("click",function (event) {
    event.preventDefault();
    formLogin.classList.remove("showPopup");
    overlay.classList.remove("showPopup");
})