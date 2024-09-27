import React from "react"



const Person = ({ person, removePerson }) => {

  const handleDeleteClick = e => {
    e.preventDefault()
    removePerson(person)
  }

  return (
    <p>
      {person.name} : {person.number} <button onClick={handleDeleteClick}>Delete</button>
    </p>
  )

}

export default Person