import React from 'react';
import PropTypes from 'prop-types';
console.log(' estoy en primeraAPp de los cojones');
// Functional component
const Listado_3_1 = ( {saludo, subtitulo} ) => {
   return (
        <>
            <h3> {saludo} </h3>
            <h3> {subtitulo} </h3>
           
        </>
       
    );
    
}
Listado_3_1.propTypes = {
    saludo: PropTypes.string.isRequired
}
Listado_3_1.defaultProps = {
    subtitulo: 'Soy un subnormal' 
}
//export default Listado_3_1; 

// función
function Saludar({saludo}){
    console.log(saludo);
    return(
        <div>
            <h1>Este es el saludo de la prueba con función , {saludo}  </h1>
        </div>
    );
}
//export default Saludar;

// clase
class Saludarclass extends React.Component{
    constructor(saludo){
        super(saludo);
        this.state = {name:'Guiadev'};
    }
    render(){
        return(
            <div>
                <h1>Hola, {this.state.name}  </h1>
            </div>
        );
    }
}
export default Saludarclass;


