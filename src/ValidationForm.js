import React, { Component } from 'react';
import {Formik, field, Form, Errormessage} from 'formik';


class ValidationForm extends Component{
    ValidationForm(values){
        let errors = {};
        if (!values.name){
            errors.name = 'This field is required';
        }
        if (!/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(values.email)){
            errors.email = 'Invalid email address';
        }
        if (!/^[a-z](3,)$/i.test(values.message)){
            errors.message = 'Must contain at least 3 chars.';    
        }
        return errors;
    } //end ValidationForm
    render(){
        return<div>
            <h1>Contact</h1>
            <Formik
                initialValues={{name: '', email: '', message: ''}}   
            />    
        </div>
    }
}
export default ValidationForm;