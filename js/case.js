

// document.getElementById('btn-case-plus').addEventListener('click', function(){
//    const caseNumberField = document.getElementById('case-number-field');
//    const caseNumberString  = caseNumberField.value;
//    const  previousCaseNumber = parseInt(caseNumberString);

//    const newCaseNumber = previousCaseNumber + 1;
//    caseNumberField.value = newCaseNumber;
// });

// document.getElementById('btn-case-plus').addEventListener('click', function(){
//   const newCaseNumber = updateCaseNumber(true);

//   const caseTotalPrice = newCaseNumber * 59;
//   const caseTotalElement = document.getElementById('case-total');
//   caseTotalElement.innerText = caseTotalPrice;
// });
document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newCaseNumber = updateCaseNumber(true);
  
  updateCaseTotalPrice(newCaseNumber);
  
});


// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString  = caseNumberField.value;
//     const  previousCaseNumber = parseInt(caseNumberString);
 
//     const newCaseNumber = previousCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;
//  });

// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const newCaseNumber = updateCaseNumber(false);
//     const caseTotalPrice = newCaseNumber * 59;
//     const caseTotalElement =  document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice;
     
//  });
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
     
 });