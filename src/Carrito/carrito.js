function Producto(props) {
    return (
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
    <h5>{props.nombre}</h5>
    {props.description}
    </div>
    <span class="badge bg-primary rounded-pill">{props.precio}</span>
  </li>
    );
}

export default function Cart() {
    return (
        <div className="col-4">
            <h2 className="d-flex justify-content-center">Carrito compras</h2>
            <ol className="list-group">
                <Producto nombre="Skull" description="Ni sabíamos que estamos huecos por dentro, lo acabamos de descubrir." precio={15.000}></Producto>
            </ol>
        </div>
    );
}