//import React, { Fragment } from 'react';

import React from 'react';
import PropTypes from 'prop-types';
console.log(' estoy en primeraAPp de los cojones');
// Functional component
const PrimeraApp = ( {saludo, subtitulo} ) => {
   return (
        <>
            <h3> {saludo} </h3>
            <h3> {subtitulo} </h3>
           
        </>
       
    );
    
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subnormal' 
}
export default PrimeraApp;  