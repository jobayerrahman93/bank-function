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
        document.getElementById('notify-fail').style.display='block';
        setTimeout(() => {
        document.getElementById('notify-fail').style.display='none';
          
        }, 2000);
       
    }


})