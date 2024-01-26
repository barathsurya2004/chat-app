import styles from './chat-window.module.css';

const CurrentUserMessage = ({ message }) => (
    <li className={`${styles.message} ${styles.sentByCurrentUser}`}>
        <span className={styles.timestamp}>{message.timestamp}</span>
        <span>

            <span className={styles.content}>{message.content}</span>
            : <span className={styles.sender}>{message.senderid}</span>
        </span>
    </li>
);

export default CurrentUserMessage;
