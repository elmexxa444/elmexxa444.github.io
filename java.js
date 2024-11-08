// Datos para la lista de tareas
const tareas = ["JavaScript", "cajero automatico", "CSS",  "portafolios web"];

// Seleccionar el contenedor donde se agregará la lista
const listaContainer = document.getElementById('lista-container');

// Crear la lista
const lista = document.createElement('ul');

// Recorrer el array de tareas y agregar cada tarea como un elemento de lista
tareas.forEach(tarea => {
    // Crear un elemento de lista (li) para cada tarea
    const item = document.createElement('li');
    item.textContent = tarea; // Asignar el texto de la tarea
    lista.appendChild(item); // Añadir el item a la lista
});

// Agregar la lista completa al contenedor en el HTML
listaContainer.appendChild(lista);
