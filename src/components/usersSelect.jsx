import UserCard from "./userCard";
import styles from './userSelect.module.css';

const UserSelect = () => {
    const dummyUser = [{
        userId: 'a;sdligfhaow',
        senderId: 'Barath surya',
        imageUrl: 'https://picsum.photos/64/64'
    },
    {
        userId: 'a;sdasdfligfhaow',
        senderId: 'Barath surya',
        imageUrl: 'https://picsum.photos/64/64'
    },
    {
        userId: 'a;sdlidsaasdfgfhaow',
        senderId: 'Barath1 surya',
        imageUrl: 'https://picsum.photos/64/64'
    },
    {
        userId: 'a;sdliasdfsawgfhaow',
        senderId: 'Barath surya1',
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