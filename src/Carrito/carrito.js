import "../Carrito/carrito.css";

function Producto(props) {
    return (
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
    <h5>{props.nombre}</h5>
    {props.description}
    </div>
    <span class="badge bg-secondary rounded-pill">{props.precio}</span>
  </li>
    );
}


export default function Cart(props) {
    return (
        <div className="col-4 mh-100" id="cart">
            <h2 className="d-flex justify-content-center">Carrito compras</h2>
            <ol className="list-group">
                {
                    props.selectedItems.map((item)=>{
                        return (<Producto nombre={item.nombre} 
                        description={item.description} 
                        precio={item.precio}></Producto>);
                    })
                }
            </ol>
        </div>
    );
}