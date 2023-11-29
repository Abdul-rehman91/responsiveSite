import React, { useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');


    const submit = () => {
        console.log('username', userName)
        console.log('password', pass)

        if (userName === 'home' && pass === '123') {
            navigate('/home');
        }else if (userName === 'about' && pass === '123') {
            navigate('/about');
        }else if (userName === 'user' && pass === '123') {
            navigate('/user');
        } else {
            navigate('*')
        }



    }
    return (
        <div className='login'>
            <h1>LOGIN FORM</h1>
            <div className='form'>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />

                <button onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default Login
