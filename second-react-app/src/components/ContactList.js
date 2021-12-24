import React, { useContext } from 'react';

import ContactItem from './ContactItem';
import { ContactContext} from './Contact';

export default function ContactList() {

    const [contact , newContact] = useContext(ContactContext);


    return (
        <div>

        {contact.map((val , id) => {
            return(

                <ContactItem name = {val.name} number = {val.number}/>
            )
        })}
            
        </div>
    )
}
