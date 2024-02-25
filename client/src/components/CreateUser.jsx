import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/createUser', { name, email, age })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <div className='card bg-dark text-light p-4'>
            <form onSubmit={Submit}>
              <h2><center>Add User</center></h2>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" placeholder="Enter your age"
                  onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className="mb-3 mt-4">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button type="submit" className="btn btn-success rounded-pill">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateUser