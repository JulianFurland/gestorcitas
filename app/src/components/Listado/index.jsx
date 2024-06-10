import Card from "../Card/index.jsx";


const Listado = (props) => {
    return(
        <>
            <div style={{display:"flex", flexDirection:"column"}}>
            {props.arrayTurnos.map((element, index) => (
                    <Card
                        key={index}
                        mascotaName={element.mascotaName} 
                        duenio={element.duenio} 
                        fechaTurno={element.fechaTurno} 
                        horaTurno={element.horaTurno} 
                        sintomas={element.sintomas}
                        onDeleteCita = {() => props.onDeleteCita}
                    />
                ))}
            </div>
        </>
    )
}
export default Listado;