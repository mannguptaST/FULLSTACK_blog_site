import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import {  getAuth , signInWithEmailAndPassword } from 'firebase/auth'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const logIn = async () =>{
        try{
            await signInWithEmailAndPassword(getAuth(), email ,password);
            navigate('/articles');

        } catch (e) {
            setError(e.message);
        }

    }

    return (
        <>
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <input
            placeholder="Your eamil address"
            value={email}
            onChange={e=> setEmail(e.target.value)}/>
        <input 
            type="password"
            placeholder="Your Passsword"
            value={password}
            onChange={e=> setPassword(e.target.value)}/>
        <button onClick={logIn}>Log In</button>
        <Link to="/create-account">Don't have a account , create one </Link>
        </>


    );
}
export default LoginPage;