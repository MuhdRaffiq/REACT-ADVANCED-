import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)  // React.usestate can also use with by import data
  
  const removeItem = (id) => {
    
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id)
      console.log(oldPeople);
      return newPeople;
    });
  }
  return <>   
    {people.map((person) => {
      const {id, name} = person;
      return <div key={id} className = 'item'>
        <h4>{name}</h4>
        <button onClick={() => removeItem(id)}>remove</button>
      </div>
    })}
    <button className="btn" onClick={() => setPeople([])}>
      clear items
    </button>
  </>; 
};

export default UseStateArray;
