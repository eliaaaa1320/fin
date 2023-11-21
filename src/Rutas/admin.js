import Foot from "../Foot/foot";
import NaveBar from "../NaveBar/navebar";
import Content from "./contadmin";

function Admin() {
    return(
        <div>
            <NaveBar></NaveBar>
            <Content></Content>
            <Foot></Foot>
        </div>
    );
}

export default Admin;