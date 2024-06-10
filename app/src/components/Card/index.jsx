
const Card = (props) =>{
    
    return(
        <div style={{border: '2px solid #00bfff', 
        borderRadius: '1rem', 
        width: '20rem', 
        margin: '10px', 
        padding: '10px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
        backgroundColor: '#e0f7fa' }}>
            <div className="card">
            <p><strong>Mascota:</strong>{props.mascotaName}</p>
            <p><strong>Dueño:</strong>{props.duenio}</p>
            <p><strong>Fecha:</strong>{props.fechaTurno}</p>
            <p><strong>Hora:</strong>{props.horaTurno}</p>
            <p><strong>Sintomas:</strong>{props.sintomas}</p>
            <button className="delete-button" id={props.mascotaName} onClick={props.onDeleteCita()} style={{ backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px', cursor: 'pointer', fontSize: '16px' }}>ELIMINAR ×</button>
        </div>
        </div>
    )
}
export default Card;