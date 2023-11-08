import Producto1 from "../Carrito/PRODUCTO-1.png";
import Producto5 from "../Carrito/PRODUCTO-5.png";
import Producto6 from "../Carrito/PRODUCTO-6.png";

function ElementoProducto(props){

  function Casa() {
    props.agrega((arrayViejito)=>[...arrayViejito, {name: props.name, price: props.price, descripcion: props.descripcion, imgagen: props.imgagen}])
  }
  return (
      <div className="col-4 row-cols-md-1 g-4 d-flex justify-content-around">
    <div className="card">
      <img src={props.imgagen} className="card-img-top" alt={props.imgagen} />
      <div className="card-body col-12">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.descripcion}</p>
        <h5 className="card-text">{props.price}</h5>
        <a href="#" className="btn btn-outline-secondary">Comprar</a>
      </div>
    </div>
    </div>
  );
}


export default function ListaProductos(props) {
  let objeto = [{
    name: "Posavasos colmena",
    price: 15000,
    descripcion: "No necesarimente es para vasos, pero si hace que las cosas no se llenen de agua.",
    imgagen: (Producto1),
  },
  {
    name: "Cuida audífonos",
    price: 20000,
    descripcion: "Perfecto evitar dañar los audífonos al caer, nos salvan de vivir sin música.",
    imgagen: (Producto5),
  },
  {
    name: "Tentáculos",
    price: 10000,
    descripcion: "Puedes usarlos de mil formas diferentes en tus espacios.",
    imgagen: (Producto6),
  },
  ];
    return(
        <div className="col-6 d-flex flex-wrap justify-content-around">
            <h3 class="text-center">Estamos tan antojados que vamos a chicanear:</h3>
            {objeto.map((objeto) => (
            <ElementoProducto
            name={objeto.name}
            price={objeto.price}
            descripcion={objeto.descripcion}
            imgagen={objeto.imgagen}
            agrega={props.setSelectItem}
            />
            ))}
        </div>
    );
}