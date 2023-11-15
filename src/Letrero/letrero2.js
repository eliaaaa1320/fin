import letrero2 from "../Letrero/BANNER-2.png";

function Letrero2() {
    return(
        <div>
        <h1 class="text-center">Haces parte del combo: amamos los objetos</h1>
        <h2 class="text-center my-2">Por eso, nos gusta usar la impresión 3D para todo</h2>    
        <img src={letrero2} class="col-md-12" alt={letrero2}></img>
        </div>
    );
}

export default Letrero2;