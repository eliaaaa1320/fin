import NaveBar from "../NaveBar/navebar";
import Foot from "../Foot/foot";
import ListaProductos from "../Carrito/prodsinprecio";
import Letrero2 from "../Letrero/letrero2";

function Home() {
    return(
        <div>
            <NaveBar></NaveBar>
            <Letrero2></Letrero2>
            <ListaProductos></ListaProductos>
            <Foot></Foot>
        </div>
    );
}

export default Home;