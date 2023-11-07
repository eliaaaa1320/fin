import NaveBar from "../NaveBar/navebar";
import Letrero1 from "../Letrero/letrero1";
import Foot from "../Foot/foot";
import Cart from "../Carrito/carrito";
import ProductList from "../Carrito/products";

function Index() {
    return(
        <div>
        <NaveBar></NaveBar>
        <Letrero1></Letrero1>
        <ProductList class="text-align-center"></ProductList>
        <Cart></Cart>
        <Foot></Foot>
        </div>
    );
}

export default Index;