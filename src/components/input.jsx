import { useContext, useState } from 'react';
import styles from './input.module.css';
import { MessageContext } from '../contexts/messageContext';
import { userContext } from '../contexts/userContext';

const MessageInput = ({ userId }) => {
    const uid = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    const { messages, setMessages } = useContext(MessageContext);
    const { user } = useContext(userContext);
    const [text, setText] = useState('')
    console.log(text)
    const sendHandler = () => {
        const time = new Date();
        const mess = {
            id: uid(),
            userId: userId,
            senderId: user.displayName,
            content: text,
            timestamp: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        }
        setMessages([...messages, mess])
        setText('')
        console.log(mess);
    }
    return (
        <div className={styles.messageInputContainer}>

            <input
                type="text"
                placeholder="Type your message..."
                className={styles.inputField}
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />
            <button className={styles.submitButton} onClick={sendHandler}>Send</button>

        </div>
    );
};

export default MessageInput;