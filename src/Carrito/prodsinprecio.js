import Producto1 from "../Carrito/PRODUCTO-1.png";
import Producto5 from "../Carrito/PRODUCTO-5.png";
import Producto6 from "../Carrito/PRODUCTO-6.png";
import Producto7 from "../Carrito/PRODUCTO-7.png";
import Producto8 from "../Carrito/PRODUCTO-8.png";
import Producto9 from "../Carrito/PRODUCTO-9.png";

function ElementoProducto(props){

  function Casa() {
    props.agrega((arrayViejito)=>[...arrayViejito, {name: props.name, price: props.price, descripcion: props.descripcion, imgagen: props.imgagen}])
  }
  return (
      <div className="container row col-md-4 my-2">
    <div className="card">
      <img src={props.imgagen} className="card-img-top" alt={props.imgagen} />
      <div className="card-body">
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
  let objeto = [
    {
      name: "Matero sentado ardiente",
      price: 25000,
      descripcion: "Hasta llevar plantas cansa, ideal para cualquier espacio del hogar.",
      imgagen: (Producto7),
    },
    {
      name: "Tentáculos",
      price: 10000,
      descripcion: "Puedes usarlos de mil formas diferentes en tus espacios.",
      imgagen: (Producto6),
    },
    {
      name: "Caldero",
      price: 30000,
      descripcion: "Puedes elegir la preparación de pócimas o que sirva de matero, recomendamos la segunda opción.",
      imgagen: (Producto9),
    },
    {
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
    name: "Ornamentos largos",
    price: 5000,
    descripcion: "Porque el espíritu de la navidad nos está respirando en la nuca.",
    imgagen: (Producto8),
  },
  ];
    return(
        <div className="row col-md-12 d-flex justify-content-around">
            <h3 class="text-center my-3">Sí o sí, sabemos que te vas a antojar:</h3>
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