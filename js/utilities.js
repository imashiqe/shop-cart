
// cart 01
function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumbersString  = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumbersString);

    
   let newPhoneNumber;

    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber -1;
    }


   phoneNumberField.value = newPhoneNumber;

   return newPhoneNumber;
}

// cart 02
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;

    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}
// cart 02 price total
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}
// cart 01 price total
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
     const  phoneTotalElement = document.getElementById('phone-total')
     phoneTotalElement.innerText = phoneTotalPrice; 
}

// get id sub total

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

