import { createContext, useState } from 'react';

export const MessageContext = createContext({
    messages: null,
    setMessages: () => null
})

export const MessageContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const values = { messages, setMessages }
    return <MessageContext.Provider value={values} > {children} </MessageContext.Provider>
}