import Cart from "./carrito";
import ProductList from "./products";
import { useState } from "react";



export default function Eshop() {
    const [selectedItems, setSelectItem] = useState([]);
    return (
        <div className="container d-flex">
            <ProductList setSelectItem={setSelectItem}></ProductList>
            <Cart selectedItems={selectedItems}></Cart>
        </div>
    );
}