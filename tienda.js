class Book {
  #nombre
  #autor
  #precio

  constructor(nombre, autor, precio) {
    this.#nombre = nombre;
    this.#autor = autor;
    this.#precio = precio;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(new_nombre) {
    this.#nombre = new_nombre;
  }

  get autor() {
    return this.#autor;
  }

  set autor(new_autor) {
    this.#autor = new_autor;
  }

  get precio() {
    return this.#precio;
  }

  set precio(new_precio) {
    this.#precio = new_precio;
  }

}

//herencia
class Comic extends Book {
  constructor(nombre, autor, precio, ilustradores) {
    super(nombre, autor, precio);
    this.ilustradores = ilustradores;
  }

  addIlustradores(newIlustradores =[]) { // agregar mas ilustradore
    this.ilustradores.push(newIlustradores)
  }
}

class ShoppingCart {
    constructor() {
        this.productos = [];
    }

    addproduct(monto, precio){
        this.productos.push(...Array(monto).fill(precio));
    }

    mostrarProductos(){
        console.log(this.productos);
    }

    calcTotal(){
        return this.productos
        .map(precio => precio)
        .reduce((ac, precio) => ac + precio, 0)
    }

    printTicket() {
        console.log(`Total a pagar ${ this.calcTotal()}`)
    }
}

//instacia de Book y Comic

const book1 = new Book("Revolución", "Arturo Pérez", 350);

const comic1 = new Comic("The Killing Joke", "A.M", 150, ["B.B"]);

comic1.addIlustradores("J.H")

const cart = new ShoppingCart();

cart.addproduct(2, comic1.precio);

cart.addproduct(3, book1.precio)

cart.mostrarProductos();

cart.printTicket();

