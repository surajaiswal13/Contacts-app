import React from "react";
import Card from "./Card"
import contacts from "../contacts.js"

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
      heading={contacts[0].name} 
      img={contacts[0].imgURL}
      mail={contacts[0].email}
      number={contacts[0].phone}
      />
    <Card 
      heading={contacts[1].name} 
      img={contacts[1].imgURL}
      mail={contacts[1].email}
      number={contacts[1].phone}
      />
      <Card 
      heading={contacts[2].name} 
      img={contacts[2].imgURL}
      mail={contacts[2].email}
      number={contacts[2].phone}
      />
    </div>
  );
}

export default App;
