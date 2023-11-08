import NaveBar from "../NaveBar/navebar";
import Letrero1 from "../Letrero/letrero1";
import Foot from "../Foot/foot";
import Eshop from "../Carrito/eShop";

function Index() {
    return(
        <div>
        <NaveBar></NaveBar>
        <Letrero1></Letrero1>
        <Eshop></Eshop>
        <Foot></Foot>
        </div>
    );
}

export default Index;