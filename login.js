document.getElementById('submit-btn').addEventListener('click',function(){

    // email value
    let emailValue=document.getElementById('user-email').value;
    

    // password value
    let passValue=document.getElementById('user-password').value;

    if(emailValue=="jobayerrahman" && passValue=="jobayer")
    {
        window.location.href="banking.html";
      
    }
    else
    {
        alert("invalid password/username");
    }


})