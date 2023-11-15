import React from "react";
import Producto2 from "../Carrito/PRODUCTO-2.png";
import Producto3 from "../Carrito/PRODUCTO-3.png";
import Producto4 from "../Carrito/PRODUCTO-4.png";

function ProductElement(props) {

    function addToCart() {
      props.add((arrayViejito)=>[...arrayViejito, {nombre: props.nombre, precio: props.precio, description: props.description, img: props.img}])
    }
    return (
        <div className="col-4 row-cols-md-1 g-4 d-flex justify-content-around">
      <div className="card">
        <img src={props.img} class="card-img-top" alt={props.img} />
        <div className="card-body col-12">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.description}</p>
          <h5 class="card-text">{props.precio}</h5>
          <a href="#" className="btn btn-outline-secondary" onClick={addToCart}>Comprar</a>
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
      img: (Producto2),
    },
    {
      nombre: "Bloque ?",
      precio: 20000,
      description: "Mejor recolectar las monedas con mucho estilo, que no tener ni una.",
      img: (Producto3),
    },
    {
      nombre: "Caldero ardiente",
      precio: 10000,
      description: "Perfecto para preparar cualquier pócima o convertirlo en matero.",
      img: (Producto4),
    },
    ];
    
    return (
        <div className="col-8 d-flex flex-wrap justify-content-around">
            <h3 class="text-center my-2">Por eso, nos gusta usar la impresión 3D para todo</h3>
            {products.map((product)=>{
              return <ProductElement 
              nombre={product.nombre} 
              precio={product.precio} 
              description={product.description}
              img={product.img}
              add={props.setSelectItem}
              ></ProductElement>
            })}
        </div>
    );
}