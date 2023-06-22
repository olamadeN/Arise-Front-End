import React, { useState } from "react";

const Signup = () => {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setisPending] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setisPending(true);
        // get values
        const userData = {userName, password};
  
/*         fetch('', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json'}
        }).then(() => {
            console.log('now signed up')
        })
 */
        try {
            const res = await fetch('http://localhost:5000/admin/signup', {
                method: 'POST',
                body: JSON.stringify({ userName, password}),
                headers: { 'Content-Type': 'application/json'}
            });
            const data = await res.json();
            console.log(data);
            if (data.user) {
                console.log("now signed up")
            }
        } 
        catch (err) {
            console.log(err)
        }
            
    };
    return(
        <div className="signUp">
            <h2>sign up</h2>
            <form onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <label>userName</label>
                <input type="text" name="userName" value={userName} onChange={(e) => setuserName(e.target.value)} required />
                <div className="userName error"></div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div className="password error"></div>
                {!isPending && <button>Sign up</button>}
                {isPending && <button disabled>Adding User...</button>}
            </form>
            
        </div>
    );
};

export default Signup;