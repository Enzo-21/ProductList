class Producto {
    constructor(nombre, precio, modelo) {
        this.nombre = nombre;
        this.precio = precio;
        this.modelo = modelo;
    }
}

class UI {
    agregarProducto(producto) {
        const lista = document.getElementById('lista-de-productos')

        const div = document.createElement('div');

        div.innerHTML = `
       <div class="card text-center my-2">
            <div class="card-body">
            <strong>Producto: </strong> ${producto.nombre} - <strong>Precio: </strong> $${producto.precio} - <strong>Modelo: </strong> ${producto.modelo} - <a href="#" class="btn btn-danger" name="borrar">Eliminar</a>
            </div>
            
        </div>
       `;
        lista.appendChild(div);
    }

    resetarFormulario(){
        document.getElementById('formulario').reset();
    }

    eliminarProducto(elemento) {
       if (elemento.name === 'borrar') {
           elemento.parentElement.parentElement.parentElement.remove();

           this.mensaje('Producto Eliminado', 'danger');
       }

      
    }

    mensaje(mensaje, clase) {
        const div = document.createElement('div');

        /* Agregamos la clase que va a tener el mensaje (color) */
        div.className = `mt-4 alert alert-${clase}` 

        /* Contenido textual del mensaje */
        div.appendChild(document.createTextNode(mensaje))

        /* DOM */
        const container = document.querySelector('.container'); 

        document.querySelector('#app');

        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000)
    }
}

//DOM 


document.getElementById('formulario').addEventListener('submit', function (e) {
    const nombre = document.getElementById('nombre-producto').value;
    const precio = document.getElementById('precio-producto').value;
    const modelo = document.getElementById('modelo-producto').value;

    const productoCargado = new Producto(nombre, precio, modelo);


    const ui = new UI;
    ui.agregarProducto(productoCargado);
    ui.resetarFormulario();
    ui.mensaje('Producto agregado', 'success');

    e.preventDefault();
})

document.getElementById('lista-de-productos').addEventListener('click', function(e){
    const ui = new UI();
    ui.eliminarProducto(e.target);
})