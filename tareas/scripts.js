document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    let lista = [];

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const agregar = taskInput.value.trim();

        if (agregar !== '') {
            lista.push(agregar);
            render();
            taskInput.value = '';
        }
    });

    function deleteTask(index){
        lista.splice(index, 1);
        render();
    }

    function render() {
        taskList.innerHTML = '';
        lista.forEach(function(tarea, index) {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${tarea}</td>
                <td><button class="btn btn-danger btn-sm" onClick="deleteTask(${index})">
                    <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            `;
            taskList.appendChild(tr);
            // const agregarTarea = document.createElement('tr');
            // agregarTarea.textContent = tarea;
            // taskList.appendChild(agregarTarea);
        });
    }

    window.deleteTask = deleteTask;


});
