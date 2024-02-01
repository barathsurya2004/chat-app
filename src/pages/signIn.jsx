import styles from './signIn.module.css';
import React, { useContext, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { createUserRefWithAuthGoogle, getUserRefWithAuth, signInWithGoogle, signinEmailPassword } from '../utils/firebase';
import { userContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignInPage = () => {
    const { user, setUser } = useContext(userContext);
    const router = useNavigate();
    useEffect(() => {
        if (user) {
            router('/app');
        }
    }, [user]);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your sign-in logic here
        console.log('Form submitted with data:', formData);
        const user = await signinEmailPassword({
            email: formData.email,
            password: formData.password
        });
        const docref = getUserRefWithAuth(user);

    };

    const googleSignupHandler = async () => {
        const resp = await signInWithGoogle();
        setUser(resp.user);
        const docref = await createUserRefWithAuthGoogle(resp.user);
        console.log(resp.user);
        const serverResp = await axios.post('http://localhost:3005/googleusersignup', resp.user, {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            }
        });
        console.log(serverResp.data);
    }


    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
                <div className={styles.googleSignInButton} onClick={googleSignupHandler}>
                    <FcGoogle />
                    <span>Sign Up with Google</span>
                </div>
            </form>
        </div>
    );
};

export default SignInPage;
