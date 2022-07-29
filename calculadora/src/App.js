import './App.css';
import cuadros from "./imagenes/cuadros.bmp" ;
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import {useState} from 'react';
import{evaluate}from 'mathjs';

function App() {
  const [input, setInput]=useState("");
  
const agregarInput=valor=>{
  setInput(input+valor);
};
const calcularResultado=()=>{
  setInput(evaluate(input))
}


  return (
    <div className="App">
     <div className ="logo-contenedor">
      <img
      src={cuadros}
      className="logoPrincipal"
      alt="Logo Principal"
      />

     </div>
     <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className="fila">
      <Boton manejarClick={agregarInput}>1</Boton>
      <Boton manejarClick={agregarInput}>2</Boton>
      <Boton manejarClick={agregarInput}>3</Boton>
      <Boton manejarClick={agregarInput}>+</Boton>
      </div>
      <div className="fila">
      <Boton manejarClick={agregarInput}>4</Boton>
      <Boton manejarClick={agregarInput}>5</Boton>
      <Boton manejarClick={agregarInput}>6</Boton>
      <Boton manejarClick={agregarInput}>-</Boton>
      </div>
      <div className="fila">
      <Boton manejarClick={agregarInput}>7</Boton>
      <Boton manejarClick={agregarInput}>8</Boton>
      <Boton manejarClick={agregarInput}>9</Boton>
      <Boton manejarClick={agregarInput}>*</Boton>
      </div>
      <div className="fila">
      <Boton manejarClick={calcularResultado}>=</Boton>
      <Boton manejarClick={agregarInput}>0</Boton>
      <Boton manejarClick={agregarInput}>.</Boton>
      <Boton manejarClick={agregarInput}>/</Boton>
      </div>
      <div className="fila">
        <BotonClear manejarClear={()=>setInput("")}>BORRAR</BotonClear>
      </div>

     </div>
    </div>
  );
}

export default App;
