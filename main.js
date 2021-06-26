const show = document.getElementById('show');
const checkbox = document.getElementById('checkbox');
const password=document.getElementById('password');
const red= document.getElementById('red');
const orange= document.getElementById('orange');
const green= document.getElementById('green');
const blue= document.getElementById('blue');
const showValue = document.getElementById('showValue');
const range = document.getElementById("range")


show.addEventListener("click",tick)


function tick(){
    if(password.type=="password"){
        password.type="text";
        // show.innerHTML = "HIDE";
        checkbox.checked =true;
    }
    else{
        password.type="password";
        // show.innerHTML = "SHOW";
        checkbox.checked =false;
    }
}

password.addEventListener("keyup",passwordChecker);

function passwordChecker(){
    if(password.value==""){
        red.style.backgroundColor="gray";
        orange.style.backgroundColor="gray";
        green.style.backgroundColor="gray";
        blue.style.backgroundColor="gray";
        showValue.innerHTML="";
        range.value=0;
    }

   if(password.value.length > 0 && password.value.length < 7 ){
     red.style.backgroundColor="red";
     showValue.innerHTML = "Your Password is Weak";
     showValue.style.color="red";
     orange.style.backgroundColor="gray";
     green.style.backgroundColor="gray";
     blue.style.backgroundColor="gray";
     range.value=10;
   }
   else if(password.value.length > 6 && (password.value.match(/\d+/)|| password.value.match(/[^a-zA-Z0-9\-\/]/))){
       red.style.backgroundColor="gray";
       orange.style.backgroundColor="orange";
       green.style.backgroundColor="gray";
       showValue.innerHTML = "Your Password is Average";
       showValue.style.color="orange";
       blue.style.backgroundColor="gray";
       range.value=40;
   }
if(password.value.match(/[^a-zA-Z0-9\-\/]/) && password.value.length > 7 &&password.value.match(/\d+/)){
    red.style.backgroundColor="gray";
    orange.style.backgroundColor="gray";
    showValue.innerHTML = "Your Password is Strong";
    showValue.style.color="green";
    green.style.backgroundColor="green"
    blue.style.backgroundColor="gray";
    range.value=80;
}
 if(password.value.match(/[^a-zA-Z0-9\-\/]/) && password.value.length > 10 &&password.value.match(/\d+/) && password.value.match(/[A-Z]/g)){
    blue.style.backgroundColor="blue";
    red.style.backgroundColor="gray";
    green.style.backgroundColor="gray";
    orange.style.backgroundColor="gray";
    showValue.innerHTML = "Your Password is Very Strong";
    showValue.style.color="blue";
    range.value=100;

}
  
}


// var str = "ASfsfaasdfafsdADSG35225A";
// var old = str.match(/[0-9]/g, '')
// console.log(old);




