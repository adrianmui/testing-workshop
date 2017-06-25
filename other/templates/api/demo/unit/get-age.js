export default getAge

// WORKSHOP_START
function getAge(person) {
  if (typeof person.age !== undefined) {
    return person.age
  }
  return 0
}
// WORKSHOP_END

// FINAL_START
function getAge({age = null}) {
  return age || 0
}
// FINAL_END
