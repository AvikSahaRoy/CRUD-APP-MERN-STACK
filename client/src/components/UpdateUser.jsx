import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateUser() {

  const { id } = useParams()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/' + id)
      .then(result => {
        console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
      .catch(err => console.log(err))
  }, [])

  const Update = (e) => {
    e.preventDefault();

    axios.put('http://localhost:3001/updateUser/' + id, { name, email, age })
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
            <form onSubmit={Update}>
              <h2><center>Update User</center></h2>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name"
                  value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" placeholder="Enter your age"
                  value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className="mb-3 mt-4">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button type="submit" className="btn btn-success rounded-pill">Update </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser