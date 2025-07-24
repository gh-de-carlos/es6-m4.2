// PUNTO 1. No hay motivo para usar `var`. No necesitamos
// una variable como propiedad del objeto `window`. 
let task = "Sacar la basura";
let isComplete = false;

// PUNTO 2.
// Crea una función que agregue una tarea a un arreglo.
//const agregarTarea = tarea => tareas.push(tarea);
// const tasks = [];      // ver PUNTO 4

// PUNTO 3. 
// Mofidica la función anterior para recibir un parámetro
// que tenga el valor por defecto `false` para el estado de
// la tarea. Si no se pasa el valor quedará 'pendiente'
const agregarTarea = (task = '', isComplete = false) => {
  // en este punto, el ejercicio aún no hace uso del
  // parámetro isComplete, ni indica si crear un objeto tarea
  tasks.push(task);
}

// PUNTO 4.
// Pide crear una función que muestre el nombre y estado de 
// cada tarea (aún no hay una lista) con su estado por la 
// consola, usando interpolación de strings.
// OBS. 1: necesitamos un arreglo con tareas para recorrer:
const tasks = [
  { nombre: "Comprar pan", isComplete: false, id: 1 },
  { nombre: "Regar las plantas", isComplete: true, id: 2 },
  { nombre: "Configurar alias de git", isComplete: false, id: 3 },
  { nombre: "Llamar a mamá", isComplete: true, id: 4 },
  { nombre: "Optimizar layout de todo app", isComplete: false, id: 5 },
  { nombre: "Revisar buffers offline", isComplete: true, id: 6 },
  { nombre: "Diseñar tooltips accesibles", isComplete: false, id: 7 },
  { nombre: "Pedir sushi", isComplete: true, id: 8 },
  { nombre: "Escribir color class 'honeydew'", isComplete: false, id: 9 },
  { nombre: "Subir fotos al backup modular", isComplete: true, id: 10 }
];

// const mostrarTareas = (task, isComplete) => {
//   console.log(`Tarea: ${task} - Estado: ${isComplete ? 'Completa' : 'Pendiente'}`);
// }

// PUNTO 5.
// Implementar un objeto `tarea` para cada tarea con nombre,
// estado e id. Usar destructuring para extraer estos campos
// y mostrarlos de manera organizada. 
// OBS: se comenta y refactoriza la función anterior:
const mostrarTareas = ({ nombre, isComplete, id }) => {
  console.log(`La tarea con id ${id} es: ${nombre}. Terminada: ${isComplete}.`);
}
tasks.forEach(task => console.log(mostrarTareas(task)));

// PUNTO 6.
// ISSUE: no está claro si quiere crear una nueva copia del 
// array o modificar en vuelo la misma. De todas formas, 
// hacer spread de objetos no asegura que se pasen estos por
// valor, SOLO LA REFERENCIA al array se pasará por valor, 
// pero cada objeto interior se pasará por referencia. ¡OJO!
const newTask = { nombre: "Dormir mucho", isComplete: false, id: 15 };
// se usa sprea par copiar el arreglo y crear uno nuevo 
// incorporando la nueva tarea "sin modificar" el original.
const newTasks = [...tasks, newTask];

// 6.2 eliminar con spread para múltiples parámetros
// Esta versión no valida los parámetros porque no se pide.
const eliminarTarea = (...indexes) => {
  const refreshed = tasks.filter(task => !indexes.includes(task.id));
  return refreshed;
}
console.log(eliminarTarea(2,3,5,7));
console.log('----- ejercicio 6.2: Usando spread y rest para eliminar tareas')

// PUNTO 7 y 8: en ./Tarea.js y ./TareaImportante.js

// PUNTO 9.1
// No tiene sentido usar un `Map` para almacenar las tareas
// completadas "de manera que no puedan repetirse" porque 
// Map almacena una referencia al objeto, no los valores. 
// Por lo tanto lo que se entenderá es: 
// 1. Almacena los id de las tareas completadas para que no
// puedan repetirse:
const completedSet = new Set();
tasks.forEach(task => {
  if (task.isComplete) completedSet.add(task.id);
})
console.dir( completedSet);
console.log('----- ejercicio 9.1: El nuevo set id\'s de tareas completas: ')
// 2. Crea un Map para almacenar las tareas 
const tasksMap = new Map();
tasks.forEach(({ id, nombre, isComplete }) => {
  tasksMap.set(id, { nombre, isComplete });
});
console.dir(tasksMap);
console.log('----- ejercicio 9.2: El nuevo mapa de tareas: ');

// PUNTO 10
function* taskNarrator(tasks) {
  for (const { id, nombre, isComplete } of tasks) {
    yield `📝 Tarea #${id}: "${nombre}" — ${isComplete ? "✅ Completada" : "🔄 Pendiente"}`;
  }
}
const narrator = taskNarrator(tasks);
console.log('----ejercicio 10: usando un generador/iterador------');
for (const line of narrator) {
  console.log(line);
}

// PUNTO 11
// Simula la carga de las tareas desde un servidor y las
// muestra como una tabla. 
function cargarTareasAsync() {
  return new Promise((resolve, reject) => {
    console.log('------ ejercicio 11: Cargando tareas desde el servidor...');
    setTimeout(() => {
      console.table(tasks);
    }, 1500)
  })
}

cargarTareasAsync();
