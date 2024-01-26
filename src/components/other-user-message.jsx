import styles from './chat-window.module.css';

const OtherUserMessage = ({ message }) => (
    <li className={`${styles.message} ${styles.sentByOtherUser}`}>
        <span>
            <span className={styles.sender}>{message.senderid}:</span>
            <span className={styles.content}>{message.content}</span>
        </span>
        <span className={styles.timestamp}>{message.timestamp}</span>
    </li>
);

export default OtherUserMessage;
