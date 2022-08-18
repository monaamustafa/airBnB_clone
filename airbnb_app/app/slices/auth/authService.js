import axios from 'axios'

// Login user
const register = async (userData) => {
  const response = await axios.post('http://localhost:8080/api/auth/signup', userData)
  
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.user))
    localStorage.setItem('token', response.data.user.token);

  }

  return response.data.user
}

const login = async (userData) => {
  const response = await axios.post('http://localhost:8080/api/auth/login', userData)
  if (response.data) {
    // localStorage.setItem('user', JSON.stringify(response.data.user))
    localStorage.setItem('user',JSON.stringify(response.data.user))
    localStorage.setItem('token', response.data.user.token);

  }

  return response.data.user
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
