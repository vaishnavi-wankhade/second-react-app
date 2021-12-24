import React, { useContext, useState } from 'react';

import { ContactContext } from './Contact';

export default function ContactAdd() {

    const [contact, newContact] = useContext(ContactContext);

    const [name, newName] = useState(" ");
    const [number, newNumber] = useState(" ");

    const addContact = () => {

        newContact((prev) => [...prev , {name:name , number:number}])

    }



    return (
        <div>

            <input
                type="text"
                placeholder="add name"
                value={name}
                onChange={(e) => newName(e.target.value)} />

            <input
                type="text"
                placeholder="add number"
                value={number}
                onChange={(e) => newNumber(e.target.value)} />

                <button onClick={addContact}> Add Contact </button>



        </div>
    )
}
