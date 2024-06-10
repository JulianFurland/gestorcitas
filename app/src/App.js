import Listado from './components/Listado/index.jsx'
import './App.css';
import Formulario from './components/Formulario/Index.jsx';
import { useState } from 'react';

function App() {
  
const [arrayTurnos, setArrayturnos] = useState([
  {
    "mascotaName": "m1",
    "duenio": "d1",
    "fechaTurno": "f1",
    "horaTurno": "h1",
    "sintomas": "s1"
  },
  {
    "mascotaName": "m2",
    "duenio": "d2",
    "fechaTurno": "f2",
    "horaTurno": "h2",
    "sintomas": "s2"
  }
]);
const addCita = (cita) => {
  setArrayturnos([...arrayTurnos, cita]);
  console.log(cita)
};
const deleteCita = (target) => {
  let mascotaName = target.target.id
  const updatedArray = arrayTurnos.filter(cita => cita.mascotaName !== mascotaName);
  setArrayturnos(updatedArray);
};

  return (
    <div className="App"> 
      <Formulario onAddCita={addCita}/>
      <Listado arrayTurnos = {arrayTurnos} onDeleteCita = {deleteCita}/>
    </div>
  );
}

export default App;
