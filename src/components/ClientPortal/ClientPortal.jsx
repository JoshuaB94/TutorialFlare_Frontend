import { ChatEngine } from 'react-chat-engine';
import './ClientPortal.css';
import NavBar from '../NavBar/NavBar';

const ClientPortal = () => {
    return ( 
        <NavBar />,
        <ChatEngine 
            height="100vh"
            projectID="e165ae9d-3188-4d54-8f9b-df7008e891c3"
            userName="JoshuaBerrios"
            userSecret="Nikon-1994"
        />
     );
}
 
export default ClientPortal;