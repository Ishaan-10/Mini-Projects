//UI ELEMENTS

const form = document.querySelector('#task-form');
const taskList = document.querySelector(".collection");
const clearTask = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const TaskInput = document.querySelector("#task");

//Add task
form.addEventListener("submit",function(e){

    e.preventDefault();
    if(TaskInput.value===""){
        alert("Add a task first");
    }else{
        const newTask =document.createElement('li');
        newTask.classList.add("collection-item");
        newTask.innerText=TaskInput.value;


        const link = document.createElement('a');
        link.className = "delete-item secondary-content";
        link.innerHTML='<i class="fa fa-remove">X</i>';

        newTask.appendChild(link);
        taskList.appendChild(newTask);
        TaskInput.value = ""
    }
});

//Remove item from list
taskList.addEventListener('click',function(e){
    
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are you sure?"))
            e.target.parentElement.parentElement.remove();
        else{
        }
    }
});

clearTask.addEventListener('click',function(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
})

filter.addEventListener('input',function(e){
    const text = filter.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display='block';
        }else{
            task.style.display = 'none';
        }
    })
    
})
