import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchAllUsers from '../../store/reducers/userReducer'
import './userlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>UserList</h1>
      {users && users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                  
                <td><FontAwesomeIcon icon={faTrashCan} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>np users found</p>
      )}

    </div>
  )
}

export default UserList