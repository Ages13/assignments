const form = document["my-form"]

form.addEventListener("submit", function(event){
    event.preventDefault();


    const firstNum = parseInt(form.firstNum.value);
    const secondNum = parseInt(form.secondNum.value);
 


    const h1 = document.createElement('h1');

    h1.textContent = firstNum + secondNum;
    document.getElementsByTagName("body")[0].append(h1);



    const thirdNum = parseInt(form.thirdNum.value);
    const forthNum = parseInt(form.forthNum.value);

    h1.textContent = thirdNum - forthNum;
    document.getElementsByTagName("div")[1].append(h1);



    const fithNum = parseInt(form.fithNum.value);
    const sixthNum = parseInt(form.sixthNum.value);

    h1.textContent = fithNum * sixthNum;
    document.getElementsByTagName("div")[2].append(h1);
    
})