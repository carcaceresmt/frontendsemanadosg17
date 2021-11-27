/**
 * url base de la api Rest a consumir 
 */
const endpoint="http://localhost:8080/api/Producto"
/**
 * definimos el id de tbody para manipularlo desde javascript
 */
const tbody=document.getElementById("tbody")

/**
 * funcion mostrar producto, peticion get de la api producto, tecnologia para consumir axios
 */
const mostrarProducto=()=>{

    axios.get(endpoint+"/all").then(resultado=>{
        const productos=resultado.data
        renderizarTabla(productos)
    })

}

/**
 * Función para renderizar la información consumida de la Api Rest producto
 * para generar la información de la tabla
 */

const renderizarTabla=(productos)=>{
    let index=1
    productos.forEach(producto => {
        console.log(index)
        console.log(producto)
        index++
    });

}


/**
 * llamado de la función mostrar producto 
 */

mostrarProducto()