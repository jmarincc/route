
import React, {Component} from 'react'
import {Formik, Field, Form} from 'formik';
import { findAllInRenderedTree } from 'react-dom/cjs/react-dom-test-utils.production.min';

class SimpleForm extends Component{
    render(){
        return(
            <div>
                <h1>Login</h1>
                <Formik
                    initialValues={{login:'', password:''}}
                    onSubmit={values=>{
                        alert("Values: " + JSON.stringify (values))
                     }}
                render={()=>(
                    <form>
                        <div>
                            <label htmlfor="Login">Login: </label>
                            <Field name="login" placeholder="Login here.."/>
                        </div>
                        <div>
                            <label htmlfor="password">Password: </label>
                            <Field name="password" type="password" placeholder="Login here.."/>
                        </div>
                        <div>
                            <button type="submit">Sign in</button>
                        </div>
                    </form>    
                )}     
                />
            </div>
        );
    }
}
export default SimpleForm;
