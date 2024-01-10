const bodega = [
    {id: 1, nombre: "papas", precio: 2590, cantidad: 4}, 
    {id: 2, nombre: "arroz", precio: 980, cantidad: 3},
    {id: 3, nombre: "fideos", precio: 540, cantidad: 6},
    {id: 4, nombre: "leche", precio: 1200, cantidad: 2},
    {id: 5, nombre: "sopas", precio: 180, cantidad: 5},
    {id: 6, nombre: "lentejas", precio: 2200, cantidad: 2},
    {id: 7, nombre: "conservas", precio: 1100, cantidad: 4},
];

let faltante = {
    id: 8,
    nombre: "galletas",
    precio: 1290,
    cantidad: 3
};

bodega.push(faltante);
console.log(bodega);

let nombre = prompt("Ingrese el nombre del producto a buscar");

const productoEncontrado = bodega.find(producto => producto.nombre === nombre);

if (productoEncontrado){
    alert(`${productoEncontrado.nombre} Disponible en Bodega`);
}else {
    alert("No disponible");
}


// console.log(bodega);