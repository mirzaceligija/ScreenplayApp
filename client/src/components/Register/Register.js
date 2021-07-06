import React, {useState}  from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../../axios/axios';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false)

    const onFormSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword)
            return;

        const response = await axios.post('/users', {
            email: email,
            password: password,
            confirmPassword: confirmPassword
        })

        console.log(response)
        setRedirect(true);
    }

    if(redirect){
        return <Redirect to="/login"/>;
    }


    return (
        <form onSubmit={onFormSubmit}>
            <h1>Register</h1>

            <input
                type="email"
                placeholder="Email adress"
                onChange={(event) => setEmail(event.target.value)}
                required/>
            <input
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                required/>

            <input
                type="password"
                placeholder="Confirm Password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                required/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default Register;