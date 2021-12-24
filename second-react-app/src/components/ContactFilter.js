import React, { useContext, useState } from 'react'

import { ContactContext} from './ContactContext';
import ContactList from './ContactList';

export default function ContactFilter() {

    const [contact , newContact] = useContext(ContactContext);

    const [searchterm , setSearchterm] = useState(" ");


    return (
        <div>

        <input 
            type="text"
            placeholder="search...."
            onChange={event => {setSearchterm(event.target.value)}}


        />

        {contact.filter((val) => {
            if (searchterm == " ") {
            return val;
        } else if (val.name.toLowerCase().includes(searchterm.toLowerCase())) {
            return val;
        }
        }).map((val,id) => {

            return (

                <p>{val.name} {val.number}</p>
            )
        })}
            
        </div>
    )
}
