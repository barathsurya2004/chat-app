import styles from './userCard.module.css';

const UserCard = ({ user, onClick }) => {
    return (
        <div className={styles.userCard} onClick={() => onClick(user)}>
            <img
                src={user.imageUrl}
                alt={`Profile of ${user.senderId}`}
                className={styles.profilePicture}
            />
            <div className={styles.userName}>
                <strong>{user.senderId}</strong>
            </div>
        </div>
    );
};

export default UserCard;
