// PUNTO 7.1
class Tarea {

  #nombre = null;
  #estado = null;
  #id = null;

  constructor(nombre, estado, id) {
    this.#nombre = nombre;
    this.#estado = estado;
    this.#id = id ?? self.crypto.randomUUID();
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(newNombre) {
    this.#nombre = newNombre;
  }

  get estado() {
    return this.#estado;
  }

  set estado(newEstado) {
    this.#estado = newEstado;
  }

  get id() {
    return this.#id;
  }

  mostrarDetalles() {
    return {
      nombre: this.#nombre,
      estado: this.#estado,
      id: this.#id
    }
  }
}

// PUNTO 8
export default Tarea;