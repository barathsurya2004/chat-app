import { useContext, useEffect, useState } from 'react';
import styles from './chat-window.module.css';
import CurrentUserMessage from './current-user-message';
import MessageInput from './input';
import OtherUserMessage from './other-user-message';
import { MessageContext } from '../contexts/messageContext';

const ChatWindow = ({ currentUserId }) => {


    console.log(currentUserId);
    // Dummy data for demonstration purposes
    const { messages, setMessages } = useContext(MessageContext);

    return (
        <div className={styles.chatWindow}>
            <ul className={styles.messageList}>
                {messages.map((message) => (
                    message.userid === currentUserId ? (
                        <CurrentUserMessage key={message.id} message={message} />
                    ) : (
                        <OtherUserMessage key={message.id} message={message} />
                    )
                ))}
            </ul>
            <MessageInput userid={currentUserId} />
        </div>
    );
};

export default ChatWindow;

