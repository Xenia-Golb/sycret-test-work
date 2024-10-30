import { useNavigate } from "react-router-dom";
import Contacts from "../../components/Contacts/Contacts";

function ContactsPage() {
    const navigate = useNavigate();
    return (<>
        <Contacts
            onClickToBack={() => navigate('/')}
            onClickToExits={() => navigate('/exits')}
        />
    </>);
}

export default ContactsPage;