import React from "react";
import Card from "./Card"
import contacts from "../contacts.js"

function createCard(contact) {
  return (
    <Card 
      heading={contact.name} 
      img={contact.imgURL}
      mail={contact.email}
      number={contact.phone}
      />
  )
}

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/* Map function wull loop through every contact in array and call createCard function */}

      {contacts.map(createCard)}
      
    </div>
  );
}

export default App;
