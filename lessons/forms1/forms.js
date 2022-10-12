const form = document["my-form"];

// submit event      used event in the function to prevent the refresh function that comes with submit with preventDefault

form.addEventListener("submit", function(event){
    event.preventDefault()

 // this will grab the text or input from the sumbit
   
const firstName = form.firstName.value
    form.firstName.value = ""

    const lastName = form.lastName.value
    form.lastName.value = ""

   // console.log(firstName + " " + lastName);
   
   //how to have the value show up under the input box

   // 1 . <h1></h1>
    const h1 = document.createElement('h1')

    // 2. <h1>Name Last</h1>
    h1.textContent = firstName + " " + lastName

    // 3. append and in this case it will be the body
    document.getElementsByTagName("body")[0].append(h1)    

})

