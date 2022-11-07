// GET's THE TODO's FROM THE DATABASE
function getData(){
    axios.get("https://api.vschool.io/davidballard/todo/")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}



// LISTS THE TODO TITLES TO THE DOM
function listData(data){
     document.getElementById('todo-list').innerHTML = ""

 //adding title   
    for(let i = 0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title 
        const container = document.createElement('div')
        container.append(h1)
        if (data[i].completed){
           h1.style.textDecoration = "line-through" 
        }        
        container.style.backgroundColor = "green"
//adding description
        const h2 = document.createElement('h2')
        h2.textContent = data[i].description
        const tainer = document.createElement('div')
        container.appendChild(h2)
        h2.style.backgroundColor = "purple"
// adding price
        const amount = document.createElement('h2')
        amount.textContent = data[i].price
        const money = document.createElement('div')
        h2.appendChild(amount)
// adding images
        const picture = document.createElement("img")
        picture.src = data[i].imgUrl
        picture.setAttribute("height", "100")
        picture.setAttribute("width", "100")
        h2.appendChild(picture)
    
// Delete Button
        const deleteButton = document.createElement('button')
        deleteButton.addEventListener("click", () => {
            axios.delete("https://api.vschool.io/davidballard/todo/" + data[i]._id)
            .then(()=> container.remove())
            .catch(err => console.log(err))
            })
        container.append(deleteButton)       
        deleteButton.textContent = "Delete"      
        document.getElementById('todo-list').appendChild(container)
// Check Mark for completed items
        const checkBox = document.createElement('input')
        const checkBoxLabel = document.createElement('label')
        container.append(checkBoxLabel)
        checkBoxLabel.textContent = "Completed?"
        container.append(checkBox)
        checkBox.type = "checkBox"
        checkBox.style.width= "20px"
        if(data[i].completed){
            checkBox.checked
        }

        // const boxCheck = data[i].completed
        checkBox.addEventListener("click", ()=> {
            console.log("checkBox")
            if (checkBox.checked){
                axios.put("https://api.vschool.io/davidballard/todo/" + data[i]._id, {completed: true})
                .then(res => console.log(res))
                .catch(err => console.log(err)) 
                h1.style.textDecoration = "line-through"    
               
          
            } else if (!checkBox.checked){
                axios.put("https://api.vschool.io/davidballard/todo/" + data[i]._id, {completed: true})
                .then(res => console.log(res))
                .catch(err => console.log(err))                
                h1.style.textDecoration = "none"
                
          
        }
    })    
                axios.put("https://api.vschool.io/davidballard/todo/" + data[i]._id, {completed: false})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
        }
       // const completeButton = document.createElement('button')
        
      //   if (boxCheck === false) {

}

 
 
  
 function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
 }
  
 getData();
  
  
 // FORM FOR THE POST REQUEST
const todoForm = document["todo-form"]
  
 todoForm.addEventListener("submit", function(e) {
    e.preventDefault()
   
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value

    }
   
    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    todoForm.imgUrl.value = ""

axios.post("https://api.vschool.io/davidballard/todo/", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
 })
