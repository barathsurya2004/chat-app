import UserCard from "./userCard";
import styles from './userSelect.module.css';

const UserSelect = () => {
    const dummyUser = [{
        userId: 'a;sdligfhaow',
        senderId: 'room0 (under Dev)',
        imageUrl: 'https://picsum.photos/64/64'
    },
    {
        userId: 'a;sdasdfligfhaow',
        senderId: 'room1',
        imageUrl: 'https://picsum.photos/64/64'
    },
    {
        userId: 'a;sdlidsaasdfgfhaow',
        senderId: 'room2',
        imageUrl: 'https://picsum.photos/64/64'
    },
    {
        userId: 'a;sdliasdfsawgfhaow',
        senderId: 'room3',
        imageUrl: 'https://picsum.photos/64/64'
    }]
    return (
        <div className={styles.usersContainer}>
            {dummyUser.map((user) => (
                <UserCard key={user.userId} user={user} onClick={() => { }} />
            ))}
        </div>
    )

}

export default UserSelect;