import React, { useEffect, useState } from 'react'
import './NewUser.css'
import { request } from '../../axios';

function NewUser() {
  const [user, setUser] = useState([])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await request.get('/v1/user')
        setUser(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getUsers()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {}

    data.name = name
    data.email = email
    data.password = password
    
    try {
      const addNewUser = await request.post('/v1/user/register', data)

      setName('')
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className='newUser pages'>
      <div className="left">
        <h2>ADD ADMIN NEW USER</h2>

        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label>Name:</label>
              <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required/>
            </div>

            <div className="item">
              <label>Email:</label>
              <input type='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' required/>
            </div>

            <div className="item">
              <label>Password:</label>
              <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
            </div>

            <button>Save User</button>
          </form>
        </div>
      </div>

      <div className="right">
        <h3 className='top'>Total number of users: {user.length}</h3>

        <div className="content">
          <h3>ALL USERS</h3>
          {
            user.map((item) => {
              return(
                <div key={item._id} className='item'>
                  <h4>Name: <span>{item?.name}</span></h4>
                  <h4>Email: <span>{item?.email}</span></h4>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default NewUser