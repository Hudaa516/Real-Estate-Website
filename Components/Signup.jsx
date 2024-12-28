import axios from 'axios';
import React, { useState } from 'react'

export default function Signup() {
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [error, setError] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault(); 
        try {
            setLoading(true);
            const response = await axios.post(
                "http://localhost:1337/auth/local/register",
                {
                    username: `${firstName} ${lastName}`, 
                    email: email,
                    password: password,
                }
            );
        } catch (err) {
            setError(err.response.data.message || "حدث خطأ ما");
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <main id='signup'>
                <div className='col-10 d-flex justify-content-center ' id='signup-form'>
                    <form onSubmit={handleRegister} className='col-6 d-flex flex-wrap justify-content-center' id='form-signup'>
                        <label htmlFor='ftname' >
                            <input type='text' id='ftname' name='ftname' placeholder='First Name' required onChange={(e) => setFirstName(e.target.value)} />
                        </label>
                        <label htmlFor='ltname' >
                            <input type='text' id='ltname' name='ltname' placeholder='Last name' required onChange={(e) => setLastName(e.target.value)} />
                        </label>
                        <label htmlFor='email' >
                            <input type='email' id='email' name='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label htmlFor='password' >
                            <input type='password' id='password' name='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <label htmlFor='confirmpassword' >
                            <input type='password' id='confirmpassword' name='confirmpassword' placeholder='Confirm password' required onChange={(e) => setConfirmpassword(e.target.value)} />
                        </label>

                        <button type='submit' className='create'>Create an account</button>
                    </form>
                    <div className='col-6 form-right' ></div>
                </div>
            </main>
        </>
    )
}
