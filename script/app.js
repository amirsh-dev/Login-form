const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const signBtn = document.querySelector(".sign");
const usernameMessage = document.querySelector(".username-message");
const passwordMessage = document.querySelector(".password-message");
const modalScreen = document.querySelector(".modal-screen");
const modalBtn = document.querySelector(".modal-button");

usernameInput.addEventListener('keyup' , function(){
    if(usernameInput.value.trim().length>3){
        usernameMessage.classList.remove('hidden');
        usernameMessage.classList.remove('unsuccess');
        usernameMessage.classList.add('success');
        usernameMessage.innerHTML = "username length is correct";
    }else{
        // error 
        usernameMessage.classList.remove('hidden');
        usernameMessage.classList.remove('success');
        usernameMessage.classList.add('unsuccess');
        usernameMessage.innerHTML = "Username must be at least 4 characters!";
    }
});

passwordInput.addEventListener('keyup' , function(){
        if(passwordInput.value.length>8){
        passwordMessage.classList.remove('hidden');
        passwordMessage.classList.remove('unsuccess');
        passwordMessage.classList.add('success');
        passwordMessage.innerHTML = "password length is correct";
    }else{
        // error 
        passwordMessage.classList.remove('hidden');
        passwordMessage.classList.remove('success');
        passwordMessage.classList.add('unsuccess');
        passwordMessage.innerHTML = "Password must be at least 8 characters!";
    }



    
});
const modalMassage = document.querySelector(".modal-card p")
const modalIcon = document.querySelectorAll(".modal-card svg")
console.log(modalIcon)
signBtn.addEventListener('click',function(){
    if(usernameInput.value.length>3 && passwordInput.value.length>8){
        modalScreen.classList.remove("hidden");
        modalMassage.innerHTML = "The operation was successful."
        modalIcon[0].classList.remove("hidden")
        modalIcon[1].classList.add("hidden")
        

    } else{
        modalScreen.classList.remove("hidden");
        modalMassage.innerHTML = "The operation was not successful."
        modalIcon[0].classList.add("hidden")
        modalIcon[1].classList.remove("hidden")
    }
});

modalBtn.addEventListener('click' , function(){
    modalScreen.classList.add("hidden")
})