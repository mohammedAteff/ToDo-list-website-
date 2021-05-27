let input = document.getElementById('taskdata');
let addbtn = document.getElementById('addbtn');
let notask = document.getElementById('notask');
let tasks = document.getElementById('tasks');

let showNoTasks = () => {
    if (tasks.childNodes.length == 0){
        notask.classList.remove('none')
    }
}

let addTask = () => {
    // notask.classList.toggle('none')
    let task = input.value;
    if (task.length == 0 || task.length < 2 || task.length > 100) {
        alert("you must enter a valid data")
        // notask.classList.remove('none');
        
    }
     else {
        notask.classList.add('none');
        tasks.innerHTML += `<div class ='task alert alert-light'> ${task}
        <button style="width: 30px;" class='delete float-right  btn btn-danger'> X </button>
        <input  type="checkbox" class=' float-left'>
        
        </div>`;


    }

    tasks.addEventListener('click' ,function(ev){
        if(ev.target.classList.contains('task')){
            ev.target.classList.add('checked')
        }

    })

    input.value = "";

}
addbtn.addEventListener('click', addTask);

let deletetask = (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        showNoTasks();
    }

}

document.addEventListener('click', deletetask);
