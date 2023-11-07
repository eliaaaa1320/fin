import NaveBar from "../NaveBar/navebar";
import Foot from "../Foot/foot";
import ListaProductos from "../Carrito/prodsinprecio";

function Home() {
    return(
        <div>
            <NaveBar></NaveBar>
            <ListaProductos></ListaProductos>
            <Foot></Foot>
        </div>
    );
}

export default Home;