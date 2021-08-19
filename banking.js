
// catch input value

function getInputValue(inputId){

  let input=document.getElementById(inputId);
  let AmountText=input.value;
  let amountValue=parseFloat(AmountText);


  // clear deposit input

  input.value='';

  return amountValue;
}

// catch string balance

function totalField(totalField,inputValue){

  let previousStringBalance=document.getElementById(totalField);
  let previousbalanceText=previousStringBalance.innerText;
  let previousBalance=parseFloat(previousbalanceText);
  
  let totalStringBalance=previousBalance+ inputValue;
  previousStringBalance.innerText=totalStringBalance;

}

function getCurrentBalance()
{
  let prevTotalBalance=document.getElementById('total-balance');
  let prevBalance=prevTotalBalance.innerText;
  let previousTotalBalance=parseFloat(prevBalance);
  return previousTotalBalance;

}



// update balance


function totalBalance(Balance, isAdd)
{
  let prevTotalBalance=document.getElementById('total-balance');
/* let prevBalance=prevTotalBalance.innerText;
let previousTotalBalance=parseFloat(prevBalance); */

let previousTotalBalance=getCurrentBalance();

if(isAdd==true)
{
  let newTotalBalance= previousTotalBalance + Balance;
  prevTotalBalance.innerText=newTotalBalance;
}

else{
  let newTotalBalance= previousTotalBalance - Balance;
prevTotalBalance.innerText=newTotalBalance;
}


}



                /* |======Main section======| */




// deposit button handler

document.getElementById('deposit-btn').addEventListener('click',function(){


let newDepositBalanceValue=getInputValue('deposit-input');

if(newDepositBalanceValue >0)
{
  totalField('deposit-balance',newDepositBalanceValue);
// add deposit total into balance grid
totalBalance(newDepositBalanceValue,true);
}
else{
  document.getElementById('notify-fail').style.display='block';
  setTimeout(() => {
  document.getElementById('notify-fail').style.display='none';
    
  }, 2000);
}


});



// Withdraw event handler

document.getElementById('withdraw-btn').addEventListener('click',function()
{
  
    let currentBalance=getCurrentBalance();
    let withDrawBalanceValue=getInputValue('withdraw-input');

   if(withDrawBalanceValue>0 && withDrawBalanceValue < currentBalance)
   {
    totalField('withdraw-balance',withDrawBalanceValue);
    // update balance 
    totalBalance(withDrawBalanceValue,false);
   }
   else{
    document.getElementById('notify-fail').style.display='block';
    setTimeout(() => {
    document.getElementById('notify-fail').style.display='none';
      
    }, 2000);
   }

  

});