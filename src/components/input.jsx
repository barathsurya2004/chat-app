import { useContext, useState } from 'react';
import styles from './input.module.css';
import { MessageContext } from '../contexts/messageContext';
import { userContext } from '../contexts/userContext';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
const socket = io.connect('http://localhost:3005');
const MessageInput = ({ userid }) => {
    useEffect(() => {
        socket.on('connection', (socket) => {
            console.log('connected to chat app' + socket.id);
        })
        socket.on('connected_data', (data) => {
            setMessages(data);
        })
        socket.on('recieve_message', (data) => {
            console.log(data);
            setMessages(data);
        })
    }, [socket]);
    const uid = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    const { messages, setMessages } = useContext(MessageContext);
    const { user } = useContext(userContext);
    const [text, setText] = useState('')
    console.log(text)
    const { userDetail } = useContext(userContext);
    console.log(userDetail);
    const sendHandler = () => {
        console.log(userDetail);
        const time = new Date();
        const mess = {
            id: uid(),
            uid: userid,
            displayname: userDetail[0].displayname,
            content: text,
            timestamp: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        }
        socket.emit('message_sent', mess);
        setMessages([...messages, mess]);
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
