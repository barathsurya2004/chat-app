import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const MessageContext = createContext({
    messages: null,
    setMessages: () => null
})

export const MessageContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await axios.get('http://localhost:3005/messages');
            setMessages(data.data);
            console.log(data.data);
        }
        getData();
    }, [])

    const values = { messages, setMessages }
    return <MessageContext.Provider value={values} > {children} </MessageContext.Provider>
}