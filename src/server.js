import axios from 'axios'

const server = {
  login(loginUser) {
let newMes = axios.post("/api/register", loginUser)
console.log(newMes)
  },
  async rerister(newUser) {
    let newMes = axios.post("/api/register", newUser)
    console.log(newMes)
  }
}

export default server