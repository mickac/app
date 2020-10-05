import React from "react"

function ContactCard(props){
   // return(
   //     <div className="contact-card">
   //         <h3>Name: {props.name}</h3>
   //         <h4>Number: {props.number}</h4>
   //         <h4>Email: {props.email}</h4>
   //     </div>
   // )
   return(
        <div className="contact-card">
            <h3>Name: {props.contact.name}</h3>
            <h4>Number: {props.contact.number}</h4>
            <h4>Email: {props.contact.email}</h4>
        </div>
   )
}

export default ContactCard