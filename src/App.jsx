import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) =>{
    event.preventDefault(); 
    let tempPerson = persons.concat([{name : newName}])
    setPersons(tempPerson)
  }
  const changeName =(event) => {
    event.preventDefault(); 
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
       <p>debug: {newName}</p>
      <h2>Numbers</h2>
      {persons.map((person,index) => {return (<p key={index}>{person.name}</p>)})}
    </div>
  )
}

export default App