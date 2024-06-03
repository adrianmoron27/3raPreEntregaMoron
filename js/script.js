//Productos Tienda

let productos = [{
  id: 11,
  title: "Neumatico GoodYear",
  nombre: "Neumatico GoodYear",
  categoria: "Rodado 15",
  precio: 200000,
  stock: 5,
  color: "15",
  img: "https://http2.mlstatic.com/D_NQ_NP_622981-MLA31651103837_082019-O.webp"
},
{
  id: 12,
  title: "Neumatico Kuhmo",
  nombre: "Neumatico Kuhmo",
  categoria: "Rodado 15",
  precio: 167000,
  stock: 5,
  color: "Rodado 15",
  img: "https://http2.mlstatic.com/D_NQ_NP_818616-MLU73636639689_122023-O.webp"
},
{
  id: 13,
  title: "gorra mclaren",
  nombre: "Gorra Mclaren",
  categoria: "Rodado 15",
  precio: 50000,
  stock: 5,
  color: "Unico",
  img: "https://http2.mlstatic.com/D_NQ_NP_740983-MLA75169471542_032024-O.webp"
},
{
  id: 14,
  title:"Neumatico Rally",
  nombre: "Neumatico Rally",
  categoria: "Rally",
  precio: 600000,
  stock: 5,
  color: "Rally",
  img: "https://http2.mlstatic.com/D_NQ_NP_924420-MLA73641343327_122023-O.webp"
},
{
  id: 15,
  title: "Llantas Oz",
  nombre: "Llantas Oz",
  categoria: "Llantas",
  precio: 450000,
  stock: 5,
  color: "N/A",
  img: "https://www.componentesyaccesorios.com/content/images/thumbs/0001952_llanta-bbs-zt514-15x65-4x100_360.jpeg"
},
{
  id: 16,
  title: "Turbo T4",
  nombre: "Turbo T4",
  categoria: "Turbo",
  precio: 600000,
  stock: 5,
  color: "negro",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZRwqQ8Efnd9z6PXfqXiqnCsnWZVi9v9LEg&s"
},

]

rendeProducts(productos)

//Función para renderizar productos (Tarjetas interactivas DOM)

function rendeProducts (arrayDeProductos) {

  let containerProductos = document.getElementById("containerProducts")

  containerProductos.innerHTML = ""

      arrayDeProductos.forEach (el => {

      let tarjetasProductos = document.createElement("div")
      tarjetasProductos.className = "tarjetaDeProducto col-sm-12 col-md-12 col-lg 12 col-xl-3 col-xxl-3"
      tarjetasProductos.innerHTML =

      `<h3>${el.nombre}</h3>
      <p>Categoria: ${el.categoria}</p>
      <img class="imagentarjeta" src=${el.img}>
      <p>Precio: $ ${el.precio}</p>
      <p>Quedan ${el.stock} unidades</p>
      <button id=${el.id} class="btnAgregar">Agregar a Carrito</button>`

      containerProductos.append(tarjetasProductos)

      let button = document.getElementById(el.id)

      button.addEventListener("click", agregarACarrito)
      button.addEventListener("click", seAgrego)

  })

}

let carritoIndex = document.getElementById("carritoDOM")             

let carrito = []

if (localStorage.getItem("carritoLStorage")) {

carrito = JSON.parse (localStorage.getItem("carritoLStorage"))
renderizarCarrito(carrito)//con esto se logra que al cargar de nuevo la página aparezcan los productos en el carrito DOM

}

//Busqueda de producto conforme a su ID y push a array de carritos vacio más renderizado en DOM, con función que está más adelante.

function agregarACarrito (e){

let buscadoCarrito = productos.find (el => el.id === Number(e.target.id))
let productoRepetido = productos.some (el => el.id === buscadoCarrito.id)


    carrito.push({
    nombre: buscadoCarrito.nombre,
    precio: buscadoCarrito.precio,
    unidades: 1,
    subtotal: buscadoCarrito.precio,
})

    localStorage.setItem("carritoLStorage",JSON.stringify(carrito))


renderizarCarrito(carrito)

}

//Alert agregar a carrito.

function seAgrego() {

alert ("Agregaste producto al carrito.")
}

//Función renderizar carrito para agregar al DOM

function renderizarCarrito(arrayDeProductos) {

carritoIndex.innerHTML = ""

arrayDeProductos.forEach(el => {

  carritoIndex.innerHTML += `SE AGREGO: <p>${el.nombre} Unidades: ${el.unidades} Subtotal: $ ${el.subtotal}<p>`

})
}

let inicioSes = document.getElementById("inicioSesion")
let registoUsu = document.getElementById("registro")

inicioSes.classList.add("formatoRegYSes")
registoUsu.classList.add("formatoRegYSes")

let containerRegSes  = document.getElementById("containerResIni")
let containerProd = document.getElementById("productosAdele")
let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let registrarse = document.getElementById("registrar")

registrarse.classList.add("btnRegIn")

//Función registro usuario

registrarse.addEventListener("click", () => {

console.log(usuario.value)
console.log(contrasenia.value)

let informacion = {usuario: usuario.value, contrasenia: contrasenia.value}
let JSONinformacion = JSON.stringify (informacion)
localStorage.setItem("informacion", JSONinformacion)

alert ("Usted se ha registrado")

})

let usuarioInicio = document.getElementById("usuarioInicio")
let contraseniaInicio = document.getElementById("contraseniaInicio")
let iniciarSesion = document.getElementById("inicio")

iniciarSesion.classList.add("btnRegIn")

//Función Inicio Sesión

iniciarSesion.addEventListener("click", () => {

console.log(usuarioInicio.value)
console.log(contraseniaInicio.value)

let informacion = JSON.parse(localStorage.getItem("informacion"))

if (informacion.usuario == usuarioInicio.value && informacion.contrasenia == contraseniaInicio.value) {

  alert("Bienvenido a la NeuMarket")   
  containerProd.classList.remove("ocultar")
  inicioSes.classList.add("ocultar")
  registoUsu.classList.add("ocultar")
  


} else {

  alert("Sus datos no son correctos")

}
})

//Función filtro productos

let buscador = document.getElementById ("btnBusca")
let inpuBuscador = document.getElementById("inputBuscador")

buscador.addEventListener("click", filtrarEscritura)

function filtrarEscritura(){

  let filtradoEscritura = productos.filter (el => el.title.includes(inpuBuscador.value))

  rendeProducts(filtradoEscritura)

}

let confirmarCarrito = document.getElementById("Confirmar")
let vaciarCarrito = document.getElementById("vaciar")

confirmarCarrito.addEventListener("click", confirmar)
vaciarCarrito.addEventListener("click", vaciar)

//Función confirmar compra

function confirmar() {

  alert("Confirmaste tu compra") //cambiar con sweet alert
  carritoIndex.innerHTML = "" 
  localStorage.removeItem("carritoLStorage") 
}

// Función vaciar DOM

function vaciar() {

  alert("Vaciaste el carrito")
  carritoIndex.innerHTML = "" 
  localStorage.removeItem("carritoLStorage")

}