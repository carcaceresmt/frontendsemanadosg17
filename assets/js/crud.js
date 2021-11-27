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
    let registro=""
    productos.forEach(producto => {
        console.log(producto)
        registro+="<tr>"+
                  "<td>"+index+"</td>"+
                  "<td>"+producto.id+"</td>"+
                  "<td>"+producto.nomprod+"</td>"+
                  "<td>"+producto.precio+"</td>"+  
                  "<td>"+producto.categoria+"</td>"+
                  "<td>"+producto.stock+"</td>"+
                  "<td>"+producto.descripcion+"</td>"+
                  "</tr>"  
        index++
    });
    tbody.innerHTML=registro
}


/**
 * llamado de la función mostrar producto 
 */

mostrarProducto()