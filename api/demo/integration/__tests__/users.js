import startServer from '../start-server'
import axios from 'axios'

let server

beforeAll(() => {
  return startServer().then(s => server = s)
})

afterAll(done => {
  server.close(done)
})

test('can get users', () => {
  return axios.get(`http://localhost:3001/api/users`)
  .then(res => {
    const user = res.data.users[0]
    expect(user).toMatchObject({
      name: expect.any(String),
      username: expect.any(String),
    })
  })
})

test.skip('can get 2 users offset 3', () => {
  const usersProm = axios.get(`http://localhost:3001/api/users?limit=5`)
    .then(res => res.data.users)
  const twoUsersProm = axios.get(`http://localhost:3001/api/users?limit=2?offset=3`)
    .then(res =>  {
      res.data.users
    }) 

  return Promise
    .all([usersProm, twoUsersProm])
    .then(res => {
      const [users, twoUsers] = res
     
      expect(twoUsers).toEqual(users.slice(2, 4))

    })
})
