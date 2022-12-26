import React from "react";

import { Form, Button } from 'semantic-ui-react';

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import './Login.css'

const Login = ({name}) =>{
 
    const navigate = useNavigate()
    
    const Login = ( data) => {

        console.log(data);
        navigate('/')
    }
    
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    return(
        
        <div className="login">
            <h2>Login {name}</h2>
            <Form>
            <Form.Field>
                    <label>Username:</label>
                    <input type="text" {...register("username", { required: "username is required" })} />
                </Form.Field>
                {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
                <Form.Field>
                    <label>Password:</label>
                    <input type="password" {...register("password", { required: "password is required", pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "please enter valid password" } })} />
                </Form.Field>
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                <Button onClick={handleSubmit(Login)}>Login</Button>
            </Form>    
        </div>
    
    )
}
export default Login