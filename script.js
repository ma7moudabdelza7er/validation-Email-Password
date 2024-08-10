let form = document.querySelector("form");
let emailField = document.querySelector(".email-field");
// Input
let emailInput = document.querySelector(".email");
let passwordInput = document.querySelector(".password");
let ComPassInput = document.querySelector(".cPassword");
//  error messages
let emailError = document.querySelector(".email-error");
let passwordError = document.querySelector(".password-error");
let compassError = document.querySelector(".cpassword-error");
// icons
let iconPass = document.querySelector(".i-p-h");
let iconCPass = document.querySelector(".i-cp-h");
// btn
let btn = document.querySelector(".button input");

window.addEventListener("load",function(){
      emailInput.focus();
})
// email Input
    emailInput.addEventListener("blur",function(){
        let emailVal = emailInput.value
        regex = /\w+@\w+.\w+/;
        if(regex.test(emailVal)){
            emailError.style.display = "none"
            btn.style.pointerEvents = "auto";
        }else{
            btn.style.pointerEvents = "none";
            emailError.style.display = "flex";
            
        }
    })
    
    // password Input
    let passVal = "";
    passwordInput.addEventListener("blur",function(){
        passVal = passwordInput.value;
        if(passVal.length < 8 || passVal == ""){
            passwordError.style.display = "flex";
            btn.style.pointerEvents = "none";
            
        }else{
            btn.style.pointerEvents = "auto";
            passwordError.style.display = "none";
            
        }
    })
    
    // confirm password Input
    ComPassInput.addEventListener("blur",function(){
        let comPassVal = ComPassInput.value
        if(passVal !== comPassVal){
            compassError.style.display = "flex";
            btn.style.pointerEvents = "none";
        }else{
            btn.style.pointerEvents = "auto";
            compassError.style.display = "none"
        }
    })
    
    function check(){
        if(passwordInput.value == "" || ComPassInput == ""){
            return false;
        }else{
            return true;
        }
    }
    form.addEventListener("submit",function(e){
        if(check() === false){
            e.preventDefault();
            passwordError.style.display = "flex";
        }else if(check() === true){
            location.href = form.getAttribute("action")
        }
        // localStorage.setItem("email",emailInput.value)
    })

    // input of confirm password
    iconCPass.addEventListener("click",function(){
        /* <i class='bx bxs-show'></i> ########## icon of show ######## */
/* <i class='bx bx-hide'></i> ####### icon of hide ######## */
    if(iconCPass.classList.contains("bx-hide")){
        iconCPass.classList.remove("bx-hide");
        iconCPass.classList.add("bxs-show");
        ComPassInput.setAttribute("type","text");
    }else{
        iconCPass.classList.add("bx-hide");
        iconCPass.classList.remove("bxs-show");
        ComPassInput.setAttribute("type","password")
    }
})
// input of password
iconPass.addEventListener("click",function(){
/* <i class='bx bxs-show'></i> ########## icon of show ######## */
/* <i class='bx bx-hide'></i> ####### icon of hide ######## */
    if(iconPass.classList.contains("bx-hide")){
        iconPass.classList.remove("bx-hide");
        iconPass.classList.add("bxs-show");
       passwordInput.setAttribute("type","text");
    }else{
        iconPass.classList.add("bx-hide");
        iconPass.classList.remove("bxs-show");
       passwordInput.setAttribute("type","password")
    }
})
