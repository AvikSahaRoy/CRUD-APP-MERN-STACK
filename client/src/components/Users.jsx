import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Users() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, [])

  // Delete user --------------------------
  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteUser/' + id)
      .then(result => {
        console.log(result)
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-lg-8 col-md-10'>
          <Link to='/create' className='btn btn-primary rounded-pill px-5'>Add User +</Link>
          <table className="table mt-2">
            <thead className="table-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className='table-primary'>
              {
                users.map((user) => {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>
                        <Link to={`/update/${user._id}`} className='btn btn-warning me-2 rounded-pill px-4'>Update</Link>
                        <button className='btn btn-danger rounded-pill px-4'
                          onClick={(e) => handleDelete(user._id)}>
                          Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users