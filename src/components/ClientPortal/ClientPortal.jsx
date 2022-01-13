import './ClientPortal.css';
import React, { useState } from 'react';
import { ChatEngine, ChatList, ChatCard, NewChatForm, ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm, ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings, getOrCreateChat} from 'react-chat-engine';

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
        <ChatEngine 
            width="100%"
            height="100vh"
            projectID="e165ae9d-3188-4d54-8f9b-df7008e891c3"
            userName="CreatorOne"
            userSecret="creatorone@snailmail.com"

            renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
            renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
            renderNewChatForm={(creds) => <NewChatForm creds={creds} />} 
            renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
            renderChatHeader={(chat) => <ChatHeader />}
            renderIceBreaker={(chat) => <IceBreaker />}
            renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
            renderIsTyping={(typers) => <IsTyping />}
            renderConnectionBar={(chat) => <ConnectionBar />}
            renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
            renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
            renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
            renderPeopleSettings={(creds, chat) => <PeopleSettings />}
            renderPhotosSettings={(chat) => <PhotosSettings />}
            renderOptionsSettings={(creds, chat) => <OptionsSettings />}
        />
     );
}
 
export default ClientPortal;