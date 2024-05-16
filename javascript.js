
const namepi = document.querySelector(".tickButoon")
namepi.addEventListener('click', () => {
  
    
    const textvalue = document.querySelector(".toAdd")
    const elementAdd = document.createElement("li")
    // elementAdd.className = 'poetsen-one-regular';
    elementAdd.classList.add('poetsen-one-regular');
    elementAdd.classList.add('bakchodiNahi');
    elementAdd.style.listStyleType = "none";

    elementAdd.innerHTML = '&#8226; ' + textvalue.value + '<span class="crossButton">&#10006;</span>';

    var liItem=document.querySelector(".addUl") 
  
    liItem.appendChild(elementAdd)
    textvalue.value=''
   
}
)

