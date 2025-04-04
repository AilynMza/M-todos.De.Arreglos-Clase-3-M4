const listaProductos = document.getElementById('productos-lista');
const productosOrdenados = document.getElementById('productos-ordenados');
//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Mochila con figuras de ranas", precio: 150, categoria: "Cute" },
    { nombre: "Termo color rosa pastel", precio: 200, categoria: "Asthetic" },
    { nombre: "Libreta beige con listones", precio: 80, categoria: "Vintage" },
    { nombre: "Zapatos con plataforma y lazo con volantes", precio: 550, categoria: "Lolita" },
    { nombre: "Vestido de hada dulce color blanco", precio: 600, categoria: "Coquette" },
];

// PRODUCTOS DE MENOS DE 100 PESOS
const menorCienPesos = productos.filter(producto => producto.precio < 100);
console.log(`Productos con Precios Menores a 100 PESOS:`)

menorCienPesos.forEach(producto => {
    console.log(`-> Nombre: ${producto.nombre}.\nPrecio: $${producto.precio}.\nCategoría: ${producto.categoria}`)
    const li = document.createElement('li'); 
    li.textContent = `Nombre: ${producto.nombre}.Precio: $${producto.precio}.Categoría: ${producto.categoria}`;
    listaProductos.appendChild(li); 
})

//PRODUCTOS POR ORDEN ALFABÉTICP
const ordenAlfabetico = productos.sort((a, b) => {
    if (a.nombre < b.nombre) return -1;
    if (a.nombre > b.nombre) return 1;
});
console.log(`Productos Ordenados Alfabéticamente:`)

ordenAlfabetico.forEach(producto => {
    console.log(`-> Nombre: ${producto.nombre}.\nPrecio: $${producto.precio}.\nCategoría: ${producto.categoria}`)
    const li = document.createElement('li'); 
    li.textContent = `Nombre: ${producto.nombre}.Precio: $${producto.precio}.Categoría: ${producto.categoria}`;
    productosOrdenados.appendChild(li); 
})
