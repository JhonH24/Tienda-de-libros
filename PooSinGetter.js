class Booka {
  #nombre;
  #autor;
  #precio;

  constructor(nombre, autor, precio) {
    this.#nombre = nombre;
    this.#autor = autor;
    this.#precio = precio;
  }

  get_info() {
    let info = `Nombre: ${this.#nombre}, Autor: ${this.#autor}, Precio: ${ this.#precio }`
    console.log(info)
  }
}

//instanciar
const book2 = new Booka("Caballos desbocados", "Yukio M", 250.00);
book2.get_info() //para quitar el undefined no usar console
