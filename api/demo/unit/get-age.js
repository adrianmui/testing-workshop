export default getAge

function getAge(person) {
  return (person.age !== undefined) ? person.age : null
}

