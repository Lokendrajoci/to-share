
const namepi = document.querySelector(".tickButoon")
namepi.addEventListener('click', () => {
  
    
    const textvalue = document.querySelector(".toAdd")
    const elementAdd = document.createElement("li")
    elementAdd.className = 'poetsen-one-regular';
    elementAdd.style.listStyleType = "none";

    elementAdd.innerText = textvalue.value
    var liItem=document.querySelector(".addUl")    
    liItem.appendChild(elementAdd)
    textvalue.value=''


   
    
}
)
