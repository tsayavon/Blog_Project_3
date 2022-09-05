import './contact.css'
import Sidebar from "../../components/sidebar/Sidebar"
import Contacts from '../../components/contact/Contacts'

export default function Contact() {
    return (
        <div className='contact'>
            <Contacts />
            <Sidebar />
        </div>
    )
}