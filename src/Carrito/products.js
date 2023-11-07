import Producto2 from "../Carrito/PRODUCTO-2.png";

function ProductElement() {
    return (
        <div class="col">
      <div class="card">
        <img src={Producto2} class="card-img-top" alt={Producto2}></img>
        <div class="card-body">
          <h5 class="card-title">Skull</h5>
          <p class="card-text">Ni sabíamos que estamos huecos por dentro, lo acabamos de descubrir.</p>
          <h5 class="card-text">$15.000</h5>
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
            <ProductElement></ProductElement>
            <ProductElement></ProductElement>
        </div>
    );
}