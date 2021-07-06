import React, {useState}  from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../../axios/axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)

    const onFormSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post('/sessions', {
            email: email,
            password: password,
        })

        console.log(response.data)

        localStorage.setItem('accessToken', response.data?.accessToken)
        localStorage.setItem('refreshToken', response.data?.refreshToken)
        setRedirect(true);
    }

    if(redirect){
        return <Redirect to="/"/>;
    }

    return (
        <form onSubmit={onFormSubmit}>
            <h1>Login</h1>

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
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;