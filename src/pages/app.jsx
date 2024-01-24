import { useContext, useEffect } from "react";
import ChatWindow from "../components/chat-window"
import { userContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import UserSelect from "../components/usersSelect";
const APP = () => {
    const { user } = useContext(userContext);
    const router = useNavigate();
    useEffect(() => {
        if (!user) {
            router('/');
        }
    }, [user]);
    if (user) {
        return (
            <div className="container">
                <UserSelect />
                <ChatWindow currentUserId={user.uid} />
            </div>
        )
    }
    return (
        <div>
            no auth
        </div>
    )
}
export default APP;