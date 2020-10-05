import React from "react"

import ContactCard from "./components/ContactCard"

function Promps(){
    return(
        <div className="contacts">
            <ContactCard 
                contact = {{name: "Michał Kaczyński", number: "123", email :"example@example.com"}}
                //name="Michał Kaczyński" 
                //number="123" 
                //email="example@example.com"
            />
            <ContactCard 
                contact = {{name: "Zdzisław Kaczyński", number: "456", email :"example@example.com"}}
                //name="Zdzisław Kaczyński" 
                //number="456" 
                //email="example@example.com"
            />
            <ContactCard 
                contact = {{name: "Bogdan Kaczyński", number: "789", email :"example@example.com"}}
                //name="Bogdan Kaczyński" 
                //number="789" 
                //email="example@example.com"
            />
            <ContactCard 
                contact = {{name: "Wezuwiusz Kaczyński", number: "145", email :"example@example.com"}}
                //name="Wezuwiusz Kaczyński" 
                //number="145" 
                //email="example@example.com"
            />
        </div>
    )
}

export default Promps