import  React from "react";

import { Form, Button } from 'semantic-ui-react';

import './Register.css'

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

const Register = ({ name }) => {

    const navigate = useNavigate()

    const Register = (data) => {
        
        console.log(data);
        
        navigate('/login')
    }

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div className="register">
            <h2 >Register {name}</h2>
            
            
            <Form>
                <Form.Field>
                    <label>Firstname:</label>
                    <input type="text" {...register("firstname", { required: "firstname is required" })} />
                </Form.Field>

                <Form.Field>
                    <label>Lastname:</label>
                    <input type="text" {...register("lastname", { required: "lastname is required" })} />
                </Form.Field>

                <Form.Field>
                    <label>Username:</label>
                    <input type="text" {...register("username", { required: "username is required" })} />
                </Form.Field>
                {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
                <Form.Field>
                    <label>Email:</label>
                    <input className="emailInput" type="text" {...register("email", { required: "email is required", pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "please enter valid email" } })} />
                </Form.Field>
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                <Form.Field>
                    <label>Password:</label>
                    <input type="password" {...register("password", { required: "password is required", pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "please enter valid password" } })} />
                </Form.Field>
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                <Button onClick={handleSubmit(Register)}>register</Button>
            </Form>
        </div>
    )
}

export default Register