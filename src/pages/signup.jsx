import styles from './signup.module.css';
import { useContext, useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { createUserRefWithAuth, createUserRefWithAuthGoogle, signInWithGoogle, signupEmailPassword } from '../utils/firebase';
import { userContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const { user, setUser } = useContext(userContext);
    const router = useNavigate();
    useEffect(() => {
        if (user) {
            router('/app')
        }
    }, [user]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your signup logic here
        console.log('Form submitted with data:', formData);
        const user = await signupEmailPassword({
            email: formData.email,
            password: formData.password
        });
        const displayName = formData.firstName + ' ' + formData.lastName;
        const docref = createUserRefWithAuth(user, displayName);


    };

    const googleSignupHandler = async () => {
        const resp = await signInWithGoogle();
        setUser(resp.user);
        console.log(resp.user);
        const docref = await createUserRefWithAuthGoogle(resp.user);
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
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
                <button type="submit">Sign Up</button>
                <div className={styles.googleSignInButton} onClick={googleSignupHandler}>
                    <FcGoogle />
                    <span>Sign Up with Google</span>
                </div>
            </form>
        </div>
    );
};

export default SignupPage;
