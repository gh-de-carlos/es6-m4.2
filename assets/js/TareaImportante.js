// PUNTO 7.2
import Tarea from './Tarea.js';

class TareaImportante extends Tarea {

  #prioridad = null;

  constructor(nombre, estado, id, prioridad) {
    super(nombre, estado, id);
    this.#prioridad = prioridad;
  }

  get prioridad() {
    return this.#prioridad;
  }

  set prioridad(newPrioridad) {
    this.#prioridad = newPrioridad;
  }

  mostrarDetalles() {
    return {
      ...super.mostrarDetalles(),
      prioridad: this.#prioridad
    }
  }
}

// PUNTO 8
export default TareaImportante;