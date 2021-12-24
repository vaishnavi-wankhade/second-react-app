import React from 'react'

export default function Employee({employeeName , email , id}) {


    return (
        <div>

        <li key={id}>

            {employeeName}
            {email}
        </li>
            
        </div>
    )
}
