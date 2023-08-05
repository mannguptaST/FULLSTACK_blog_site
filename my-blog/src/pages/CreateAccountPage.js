import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    
    
const CreateAccountPage = () => {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    
    const createAccount = async () =>{
        try{
            if ( password!== confirmpassword) {
                setError('Password and confirm password do not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email ,password);
            navigate('/articles');
        } catch (e){
            setError(e.message)
        }
    }

    return (
        <>
        <h1>Create Account</h1>
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
        <input 
            type="password"
            placeholder="Re-enter Passsword"
            value={confirmpassword}
            onChange={e=> setconfirmPassword(e.target.value)}/>
        <button onClick={createAccount}>Create Account</button>
        <Link to="/login">Already  have a account ? Log in here </Link>
        </>


    );
}
export default CreateAccountPage; 