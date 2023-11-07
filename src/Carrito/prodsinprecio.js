import Producto1 from "../Carrito/PRODUCTO-1.png";
import Producto5 from "../Carrito/PRODUCTO-5.png";
import Producto6 from "../Carrito/PRODUCTO-6.png";

function ElementoProducto(){
    return (
        <div class="row row-cols-2 row-cols-md-2 g-4 text-center">
      <div class="card">
        <img src={Producto1} class="card-img-top" alt={Producto1}></img>
        <div class="card-body">
          <h5 class="card-title">Posavasos colmena</h5>
          <p class="card-text">No necesarimente es para vasos, pero si hace que las cosas no se llenen de agua.</p>
          <h5 class="card-text"></h5>
          <a href="#" class="btn btn-outline-secondary">Mire más</a>
        </div>
      </div>
      <div class="card">
        <img src={Producto5} class="card-img-top" alt={Producto5}></img>
        <div class="card-body">
          <h5 class="card-title">Cuida audífonos</h5>
          <p class="card-text">Perfecto evitar dañar los audífonos al caer, nos salvan de vivir sin música.</p>
          <h5 class="card-text"></h5>
          <a href="#" class="btn btn-outline-secondary">Mire más</a>
        </div>
      </div>
      <div class="card">
        <img src={Producto6} class="card-img-top" alt={Producto6}></img>
        <div class="card-body">
          <h5 class="card-title">Caldero ardiente</h5>
          <p class="card-text">Puedes usarlos de mil formas diferentes en tus espacios.</p>
          <h5 class="card-text"></h5>
          <a href="#" class="btn btn-outline-secondary">Mire más</a>
        </div>
      </div>
    </div>
    );
}

export default function ListaProductos() {
    return(
        <div className="col-8 d-flex flex-wrap justify-content-around">
            <h3 class="text-center">Estamos tan antojados que vamos a chicanear:</h3>
            <ElementoProducto></ElementoProducto>
        </div>
    )
}