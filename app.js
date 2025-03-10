// Aggiungi evento al pulsante "Aggiungi"
document.getElementById('add-task').addEventListener('click', addTask);

// Funzione per aggiungere una nuova attività
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Crea un nuovo elemento li per la task
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete-btn">Elimina</button>`;

        // Aggiungi l'evento per segnare come completata
        li.addEventListener('click', toggleComplete);

        // Aggiungi l'evento per eliminare la task
        li.querySelector('.delete-btn').addEventListener('click', deleteTask);

        // Aggiungi il nuovo elemento li alla lista
        document.getElementById('task-list').appendChild(li);
        
        // Pulisci il campo input
        taskInput.value = '';
    }
}

// Funzione per segnare una task come completata
function toggleComplete(event) {
    const li = event.target;
    if (li.tagName === 'LI') {
        li.classList.toggle('completed');
    }
}

// Funzione per eliminare una task
function deleteTask(event) {
    event.stopPropagation();  // Impedisce che venga eseguito anche toggleComplete
    const li = event.target.parentElement;
    li.remove();
}
