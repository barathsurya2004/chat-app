import { useState, createContext, useEffect } from 'react';
import { auth, onAuthStateChangedListener } from '../utils/firebase';

export const userContext = createContext({
    user: null,
    setUser: () => { },
    userDetail: null,
    setUserDetail: () => null
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userDetail, setUserDetail] = useState(null);
    useEffect(() => {
        const unsub = onAuthStateChangedListener((authUser) => {
            console.log(authUser)
            setUser(authUser);
        });

        return unsub;
    }, []);

    const value = { user, setUser, userDetail, setUserDetail };

    return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserContextProvider;
