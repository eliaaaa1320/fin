import letrero1 from "../Letrero/BANNER.png";

function Letrero1() {
    return(
        <div>
        <h2 class="text-center my-2">Sabemos que los objetos nos cambian la vida</h2>
        <img src={letrero1} class="mx-auto d-block" alt={letrero1}></img>
        </div>  
    );
}

export default Letrero1;