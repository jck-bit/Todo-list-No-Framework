const del = document.querySelector('#todo-list ul')

del.addEventListener('click', (e) =>{
  if(e.target.className ==='delete'){
      const li = e.target.parentElement;
      del.removeChild(li)
  }
})


const addForm = document.forms['add-task'] 

addForm.addEventListener('submit', (e) =>{
   e.preventDefault();

   const value = addForm.querySelector('input[type="text"]').value;

   //create element
   const li = document.createElement('li');
   const taskName = document.createElement('span');
   const deleteBtn = document.createElement('span');
  
   //add content
   deleteBtn.textContent = 'Remove Task'
   taskName.textContent = value
 
    //Add classes
    deleteBtn.classList.add('delete')
    taskName.classList.add('name')

    //Add to the Dom
    li.appendChild(taskName);
    li.appendChild(deleteBtn)
    del.appendChild(li)

})