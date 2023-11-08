import Producto2 from "../Carrito/PRODUCTO-2.png";
import Producto3 from "../Carrito/PRODUCTO-3.png";
import Producto4 from "../Carrito/PRODUCTO-4.png";

function ProductElement(props) {

    function addToCart() {
      props.add((arrayViejito)=>[...arrayViejito, {nombre: props.nombre, precio: props.precio, description: props.description}])
    }
    return (
        <div class="col-4 row-cols-md-1 g-4 d-flex justify-content-around">
      <div class="card">
        <img src=".." class="card-img-top" alt=".."></img>
        <div class="card-body col-12">
          <h5 class="card-title">{props.nombre}</h5>
          <p class="card-text">{props.description}</p>
          <h5 class="card-text">{props.precio}</h5>
          <a href="#" class="btn btn-outline-secondary" onClick={addToCart}>Comprar</a>
        </div>
      </div>
      </div>
    );
}

export default function ProductList(props) {
  let products = [{
      nombre: "Skull",
      precio: 15000,
      description: "Ni sabíamos que estamos huecos por dentro, lo acabamos de descubrir.",
    },
    {
      nombre: "Bloque ?",
      precio: 20000,
      description: "Mejor recolectar las monedas con mucho estilo, que no tener ni una.",
    },
    {
      nombre: "Caldero ardiente",
      precio: 10000,
      description: "Perfecto para preparar cualquier pócima o convertirlo en matero.",
    },
    ];
    

    return (
        <div className="col-8 d-flex flex-wrap justify-content-around">
            <h3 class="text-center">Por eso, nos gusta usar la impresión 3D para todo</h3>
            {products.map((product)=>{
              return <ProductElement 
              nombre={product.nombre} 
              precio={product.precio} 
              description={product.description}
              add={props.setSelectItem}
              ></ProductElement>
            })}
        </div>
    );
}