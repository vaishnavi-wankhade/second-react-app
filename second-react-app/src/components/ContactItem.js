import React from 'react'

export default function ContactItem(name , number , id) {
    return (
        <div key= {id}>

        {name}
        {number}
  
        </div>
    )
}
