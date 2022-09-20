
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);

    //clear input field
    inputField.value = '';

    return inputAmount;
    

}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount,issAdd){
    const balanceTotal =  document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
  if(issAdd == true){
    balanceTotal.innerText = previousBalanceTotal + amount;
  }else{
    balanceTotal.innerText = previousBalanceTotal -  amount;
  }
}


document.getElementById('deposit-button').addEventListener('click',function(){
    
    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total',depositAmount);
    updateBalance(depositAmount,true);

    
})

// withdraw 

document.getElementById('withdraw-button').addEventListener('click',function(){
    
    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total',withdrawAmount)
    updateBalance(withdrawAmount,false);
   
})