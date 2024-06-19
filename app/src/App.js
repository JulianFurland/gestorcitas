import Listado from './components/Listado/index.jsx'
import './App.css';
import Formulario from './components/Formulario/Index.jsx';
import { useState } from 'react';
import Modal from './components/Modal/index.jsx';

function App() {
  
const [arrayTurnos, setArrayturnos] = useState([]);
const addCita = (cita) => {
  setArrayturnos([...arrayTurnos, cita]);
};

const [turnoAEliminar, setTurnoAEliminar] = useState();
const [showModal, setShowModal] = useState(false);

const deleteCita = (target) => {
  setTurnoAEliminar(target)
  setShowModal(true)
};

const deletionHandler = (target) =>{
  let mascotaName = target.target.id
  const updatedArray = arrayTurnos.filter(cita => cita.mascotaName !== mascotaName);
  setArrayturnos(updatedArray);
  setShowModal(false)
}

const deleteString = 'Vas a eliminar esta cita. Deseas continuar?'

  return (
    <div className="App"> 
      <Formulario onAddCita={addCita}/>
      <Listado arrayTurnos = {arrayTurnos} onDeleteCita = {deleteCita}/>
      {showModal && <Modal h1={deleteString} setter={(value) => {
            if (value) {
              deletionHandler(turnoAEliminar); 
            }
            setShowModal(false); 
          }}
          isOpen={setShowModal}
      />}
    </div>
  );
}

export default App;
