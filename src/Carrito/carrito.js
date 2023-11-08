import { useState } from "react";
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
    let total = 0;

    function pay(){
        let venta = {
            producto: props.selectedItems,
            total: total,
        }
        fetch(
            "/pay", {
                headers: {
                    "Content-type": "Aplication/json",
                },
                method: "POST",
                body: JSON.stringify(venta),
            }
        )
    }
    return (
        <div className="col-4 mh-100" id="cart">
            <h2 className="d-flex justify-content-center">Carrito compras</h2>
            <ol className="list-group" id="list">
                {
                    props.selectedItems.map((item)=>{
                        total+=item.precio;
                        return (<Producto nombre={item.nombre} 
                        description={item.description} 
                        precio={item.precio}></Producto>);
                    })
                }
            </ol>
            <div className="d-flex justify-content-around col-12 mt-4">
            <button type="button" class="btn btn-outline-primary">Total:{total}</button>
            <button type="button" class="btn btn-outline-success" onClick={pay}>Paga aquí</button>
            </div>
        </div>
    );
}