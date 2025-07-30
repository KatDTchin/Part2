import { useState,useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const addPerson = (event) => {
  event.preventDefault()

  const nameExists = persons.some(person => person.name === newName)
  if(window.confirm("This number already existe do you want to overwrited?")){
 const newPerson = {
    name: newName,
    number: newNumber,
  }

  axios
    .post('http://localhost:3001/persons', newPerson)
    .then(response => {
      setPersons([...persons, response.data])
      setNewName('')
      setNewNumber('')
    })}
}


    useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

const changeName = (event) => {
  setNewName(event.target.value)
}

const changeNumber = (event) => {
  setNewNumber(event.target.value)
}


  const deleteUser = (id) => {
  if (window.confirm("Are you sure you want to delete this person?")) {
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        alert("Failed to delete: " + error)
      })
  }
}

const [newNumber,setNewNumber] = useState('')


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={changeName} />
        </div> <br />
        <div>
          Number: <input value={newNumber} onChange={changeNumber} />
        </div> <br />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <p>debug: {newName}</p>
      <p>debug list: {persons.map(person => person.name).join(', ')}</p>

      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <>
        <p key={index}>{person.name}</p>
        <button id={person.id} onClick={() => deleteUser(person.id)}>Delete number</button>
        </>
      ))
}
    </div>
  )
}

export default App
