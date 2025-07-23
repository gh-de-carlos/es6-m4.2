# <img src="favicon.png" style="width:25px; border-radius: 50%"/> Módulo 4 - AE2 - "ToDO con ES6+" <img src="favicon.png" style="width:25px; border-radius: 50%"/>

<!-- ![mockup o entrega del ejercicio][0] -->


## 🚀 OBJETIVO

En esta actividad, tendrás que implementar una pequeña aplicación de gestión de tareas que utilice varias características de ES6. Tu aplicación debe ser capaz de agregar tareas, eliminar tareas, editar tareas y mostrar la lista de tareas con una interfaz sencilla en la consola. Utiliza ES6 en su totalidad para escribir el código.

## 👉 REQUISITOS

1. **Definir variables usando `let`, `const` y `var`:**
    * Crea una variable para almacenar el nombre de una tarea y otra para su estado (completa o pendiente). Asegúrate de usar `let` y `const` correctamente, y si es necesario, utiliza `var` para una variable de ámbito global (solo si es necesario).
2. **Funciones usando Arrow Functions:**
    * Crea una función `agregarTarea` utilizando **arrow function** que reciba el nombre de la tarea y la agregue a un array de tareas.
3. **Parámetros por defecto:**
    * Modifica la función `agregarTarea` para que reciba un parámetro por defecto de `false` para el estado de la tarea (si no se pasa el valor, se considerará como pendiente).
4. **Interpolación de strings:**
    * Dentro de tu función `mostrarTareas`, usa **interpolación de strings** para mostrar el nombre de cada tarea con su estado en la consola.
5. **Destructuring de objetos y arrays:**
    * Implementa un objeto `tarea` para cada tarea con las propiedades `nombre`, `estado` y `id`. Usa **destructuring** para extraer estas propiedades y mostrarlas de manera organizada.
6. **Operador Spread y Rest:**
    * Usa el operador **Spread** para agregar una nueva tarea a la lista de tareas. Por ejemplo, al agregar una nueva tarea, usa el operador para crear una nueva lista de tareas sin modificar la lista original.
    * Usa el operador **Rest** para que la función `eliminarTarea` pueda recibir múltiples Índices de tareas a eliminar.
7. **Clases y Herencia:**
    * Crea una clase `Tarea` que tenga atributos `nombre`, `estado` y `id`, y un método `mostrarDetalles` que imprima la información de la tarea.
    * Crea una clase `TareaImportante` que herede de `Tarea` y tenga un atributo adicional `prioridad`. Sobrescribe el método `mostrarDetalles` para incluir el nivel de prioridad.
8. **Módulos: Exportar e Importar:**
    * Usa módulos para dividir el código. Exporta las clases `Tarea` y `TareaImportante` en un archivo y luego impórtalas en el archivo principal donde se utilizarán.
9. **Sets y Maps:**
    * Utiliza un `Set` para almacenar las tareas que han sido completadas, de manera que no puedan repetirse.
    * Usa un `Map` para almacenar las tareas, donde la clave sea el `id` de la tarea y el valor sea el objeto `tarea`.
10. **Iteradores y Generadores:**
    * Crea un generador para iterar sobre las tareas y devolver cada tarea con su índice. 
11. **Promesas: async y await:**
    * Crea una función que simule una solicitud asíncrona para obtener las tareas de un servidor (puede `cargarTareasAsync` ser una función que devuelva una promesa). Usa `async/await` para esperar la respuesta antes de mostrar las tareas en la consola.

## 👀 NOTAS

- **PUNTO 1**: la diferencia entre una variable creada con `let` y otra con `var` en el scope "0" del archivo, es simplemente que `var` creará una propiedad en el objeto `window` mientras que `let` no. Esto tiene muchos riesgos y es parte de los motivos por los cuales está desaconsejada usarla hoy en día, pero eso no cambia el hecho de que respecto al "global" del archivo, ambas tienen la misma visibilidad, así que no hay ninguna justificación para agregarla al objeto `window`. 

## 📁 ESTRUCTURA DEL PROYECTO

```
📁 esta-carpeta/  
├── index.html  
├── favicon.png  
├── README.md  
└── 📁assets/  
    ├── 📁css/  
    │   └── style.css  
    ├── 📁img/  
    ├── 📁js/  
    │   └── main.js
    └── 📁utils/  
        ├── mockuppng
        └── blablah
```


## 📖 DOCUMENTACIÓN CONSULTADA
* [][2]
* [][3]
* [][4]
* [][5]

## 🧰 UTILIDADES

* [][6]

<!-- Enlaces referenciados arriba -->
[0]:./assets/utils/mockup.png
[1]:
[2]:
[3]:
[4]:
[5]:
[6]:

