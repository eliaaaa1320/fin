import Producto2 from "../Carrito/PRODUCTO-2.png";
import Producto3 from "../Carrito/PRODUCTO-3.png";
import Producto4 from "../Carrito/PRODUCTO-4.png";

function ProductElement() {
    return (
        <div class="row row-cols-2 row-cols-md-2 g-4 text-center">
      <div class="card">
        <img src={Producto2} class="card-img-top" alt={Producto2}></img>
        <div class="card-body">
          <h5 class="card-title">Skull</h5>
          <p class="card-text">Ni sabíamos que estamos huecos por dentro, lo acabamos de descubrir.</p>
          <h5 class="card-text">$15.000</h5>
          <a href="#" class="btn btn-outline-secondary">Comprar</a>
        </div>
      </div>
      <div class="card">
        <img src={Producto3} class="card-img-top" alt={Producto3}></img>
        <div class="card-body">
          <h5 class="card-title">Bloque ?</h5>
          <p class="card-text">Mejor recolectar las monedas con mucho estilo, que no tener ni una.</p>
          <h5 class="card-text">$20.000</h5>
          <a href="#" class="btn btn-outline-secondary">Comprar</a>
        </div>
      </div>
      <div class="card">
        <img src={Producto4} class="card-img-top" alt={Producto4}></img>
        <div class="card-body">
          <h5 class="card-title">Caldero ardiente</h5>
          <p class="card-text">Perfecto para preparar cualquier pócima o convertirlo en matero.</p>
          <h5 class="card-text">$10.000</h5>
          <a href="#" class="btn btn-outline-secondary">Comprar</a>
        </div>
      </div>
    </div>
    );
}

export default function ProductList() {
    return (
        <div className="col-8 d-flex flex-wrap justify-content-around">
            <h3 class="text-center">Por eso, nos gusta usar la impresión 3D para todo</h3>
            <ProductElement></ProductElement>
        </div>
    );
}