import { useContext } from 'react';
import styles from './chat-window.module.css';
import { userContext } from '../contexts/userContext';

const CurrentUserMessage = ({ message }) => {
    console.log(message);
    return (

        <li className={`${styles.message} ${styles.sentByCurrentUser}`}>
            <span className={styles.timestamp}>{message.timestamp}</span>
            <span>

                <span className={styles.content}>{message.content}</span>
                : <span className={styles.sender}>{message.displayname}</span>

            </span>
        </li>
    )
}
    ;

export default CurrentUserMessage;
