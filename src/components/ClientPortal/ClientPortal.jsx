import './ClientPortal.css';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';

const ClientPortal = () => {
    const [username, setUsername] = useState("");

    function createDirectChat(creds){
        getOrCreateChat(
            creds,
            {is_direct_chat: true, usernames: [username]},
            () => setUsername("")
        )
    }

    function renderChatForm(creds){
        return (
            <div>
                <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <button onClick={() => createDirectChat(creds)}> Create New Chat</button>
            </div>
        )
    }

    return ( 
        <NavBar />,
        <ChatEngine 
            height="100vh"
            projectID="e165ae9d-3188-4d54-8f9b-df7008e891c3"
            userName="JoshuaBerrios"
            userSecret="Nikon-1994"
            renderNewChatForm={(creds) => renderChatForm(creds)}
        />
     );
}
 
export default ClientPortal;