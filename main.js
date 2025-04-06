const listaProductos = document.getElementById('productos-lista');
const productosOrdenados = document.getElementById('productos-ordenados');
const nombresProductos = document.getElementById(`nombres-productos`);
const precioProductos = document.getElementById(`precio-productos`) 
//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Mochila con figuras de ranas", precio: 150, categoria: "Cute" },
    { nombre: "Termo color rosa pastel", precio: 200, categoria: "Asthetic" },
    { nombre: "Libreta beige con listones", precio: 80, categoria: "Vintage" },
    { nombre: "Zapatos con plataforma y lazo con volantes", precio: 550, categoria: "Lolita" },
    { nombre: "Vestido de hada dulce color blanco", precio: 600, categoria: "Coquette" },
];

// PRODUCTOS DE MENOS DE 100 PESOS - FILTER
const menorCienPesos = productos.filter(producto => producto.precio < 100);
console.log(`Productos con Precios Menores a 100 PESOS:`)

menorCienPesos.forEach(producto => {
    console.log(`-> Nombre: ${producto.nombre}.\nPrecio: $${producto.precio}.\nCategoría: ${producto.categoria}`)
    const li = document.createElement('li'); 
    li.textContent = `Nombre: ${producto.nombre}.Precio: $${producto.precio}.Categoría: ${producto.categoria}`;
    listaProductos.appendChild(li); 
})

//PRODUCTOS POR ORDEN ALFABÉTICO - SORT
const ordenAlfabetico = productos.sort((a, b) => {
    if (a.nombre < b.nombre) return -1;
    if (a.nombre > b.nombre) return 1;
});
console.log(`
    
Productos Ordenados Alfabéticamente:`)

ordenAlfabetico.forEach(producto => {
    console.log(`-> Nombre: ${producto.nombre}.\nPrecio: $${producto.precio}.\nCategoría: ${producto.categoria}`)
    const li = document.createElement('li'); 
    li.textContent = `Nombre: ${producto.nombre}.Precio: $${producto.precio}.Categoría: ${producto.categoria}`;
    productosOrdenados.appendChild(li); 
})

// PRODUCTOS DONDE SE MUESTRAN SOLO LOS NOMBRES - MAP 
const productosNombres = productos.map(producto => {
    return producto.nombre;
})

console.log(`
    
Nombres de Todos los Productos Disponibles:`)

productosNombres.forEach(productoNombre => {
    console.log(`-> ${productoNombre}`);
    const li = document.createElement(`li`);
    li.textContent = `${productoNombre}`;
    nombresProductos.appendChild(li);
})

// PRECIO TOTAL DE LOS PRODUCTOS - REDUCE
const totalSum = productos.reduce((acumulador, producto) => (acumulador + producto.precio), 0)
console.log(`
   
Precio total de los Productos en Tienda: ${totalSum}`)
precioProductos.textContent = `${totalSum} pesos mexicanos`;

//