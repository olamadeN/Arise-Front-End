import banner from '../../img/service/sbanner.png';
import  Nav from '../Ui/nav/nav';
import'./components/admin.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setisPending] = useState(false);


    const userNameError = document.querySelector('.userName.error');
    const passwordError = document.querySelector('.password.error');
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setisPending(true);
        const userData = {userName, password};
        userNameError.textContent = '';
        passwordError.textContent = '';
        try {
            const res = await fetch('https://ariseapi.onrender.com/admin/login', { 
                method: 'POST', 
                body: JSON.stringify(userData),
                headers: {'Content-Type': 'application/json'}
            });
            const data = await res.json();
            console.log(data);
            if (data.errors) {
                if(data.errors.userName){
                    
                    userNameError.textContent = data.errors.userName;
                }
                if(data.errors.password){
                   
                    passwordError.textContent = data.errors.password;
                }
                setisPending(false)
                
            }
            if (data.user) {
                localStorage.setItem('token', data);
                console.log('you are now logged in')
                navigate('/dashboard/*'/* , { replace: true } */)
            }

        }
        catch (err) {
            console.log(err);
        }
    };
    return(
        <>
            <Nav/>
            <div className="sectStart">
                <section className='banner'>
                    <img src={banner} alt="service banner" />
                    <div className="overlay">
                        <div className="sbtxt">
                            <h1> Admin Dashboard</h1>
                        </div>
                    </div>
                </section>
                <div className="sects" style={{textAlign:'center'}}>
                    <div className="loginForm">
                        <form  onSubmit={handleSubmit}>
                            <h2>Sign In</h2>
                            <label>userName</label>
                            <div style={{color:'red'}} className="userName error"></div>
                            <input type="text" name="userName" value={userName} onChange={(e) => setuserName(e.target.value)} required />
                            
                            <label>Password</label>
                            <div style={{color:'red'}} className="password error"></div>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <br /><br />
                            {!isPending && <button>Sign In</button>}
                            {isPending && <button disabled>logging in...</button>}
                        </form>
                    </div>
                    
                </div>
            </div>
        
        </>
        
    );
};

export default Login;