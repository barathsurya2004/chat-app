import { useContext, useEffect } from "react";
import ChatWindow from "../components/chat-window"
import { userContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { io } from 'socket.io-client';
const APP = () => {
    const socket = io.connect('http://localhost:3001')
    const { user } = useContext(userContext);
    const router = useNavigate();
    useEffect(() => {
        if (!user) {
            router('/');
        }
    }, [user]);
    if (user) {
        return (
            <ChatWindow currentUserId={user.uid} />
        )
    }
    return (
        <div>
            no auth
        </div>
    )
}
export default APP;