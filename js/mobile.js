function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString) ;
    return currentPhoneTotal;

}

function calculateSubTotal(){
     // calculate total 
     const  currentPhoneTotal = getTextElementValueById('phone-total');
     const currentCaseTotal = getTextElementValueById('case-total');
     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
      const subTotalElement = document.getElementById('sub-total');
      subTotalElement.innerText = currentSubTotal ;
}



//end

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
   
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(false);
   updatePhoneTotalPrice(newPhoneNumber);
   calculateSubTotal();
})