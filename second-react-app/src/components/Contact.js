import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

export default function ContactProvider(props) {

    const [contact , newContact] = useState([

        {
            name: "Vaishnavi" , 
            number: 7558406283
        },

        {
            name: "Neha" , 
            number: 9145215785
        },

    ])
    return (
        <div>

        <ContactProvider value={[contact , newContact]}>
            {props.children}
        </ContactProvider>
            
        </div>
    )
}
