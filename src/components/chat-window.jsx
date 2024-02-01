import { useContext, useEffect, useState } from 'react';
import styles from './chat-window.module.css';
import CurrentUserMessage from './current-user-message';
import MessageInput from './input';
import OtherUserMessage from './other-user-message';
import { MessageContext } from '../contexts/messageContext';
import axios from 'axios';
import { userContext } from '../contexts/userContext';

const ChatWindow = ({ currentUserId }) => {
    const { user, setUserDetail, userDetail } = useContext(userContext);
    console.log(user);
    useEffect(() => {

        if (user) {
            axios.post('http://localhost:3005/getuser', {
                uid: user.uid
            }, {
                headers:
                {
                    "Content-Type": 'application/x-www-form-urlencoded'
                }
            }).then((res) => {
                console.log(res.data);
                setUserDetail(res.data);
                console.log(userDetail);
            })
        }
        else {
            setUserDetail(null);
        }
    }, [user]);

    console.log(currentUserId);
    // Dummy data for demonstration purposes
    const { messages, setMessages } = useContext(MessageContext);

    return (
        <>
            <div className={styles.chatWindow}>
                <ul className={styles.messageList}>
                    {messages.map((message) => (
                        message.uid === currentUserId ? (
                            <CurrentUserMessage key={message.id} message={message} />
                        ) : (
                            <OtherUserMessage key={message.id} message={message} />
                        )
                    ))}
                </ul>

                <MessageInput userid={currentUserId} />

            </div>
        </>
    );
};

export default ChatWindow;

