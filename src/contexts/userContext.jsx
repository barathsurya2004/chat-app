import { useState, createContext, useEffect } from 'react';
import { onAuthStateChangedListener } from '../utils/firebase';


export const userContext = createContext({
    user: null,
    setUser: () => { },
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChangedListener((authUser) => {
            setUser(authUser);
        });

        return unsub;
    }, []);

    const value = { user, setUser };

    return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserContextProvider;
