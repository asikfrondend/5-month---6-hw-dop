import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './userlist.css';
import fetchAllUsers from '../../store/reducers/userReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'; 
import { deleteUserById } from '../../actions/userActions';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const deleteUser = (userId) => {
    dispatch(deleteUserById(userId)); 
  };

  return (
    <div className="user-list-container">
      <h1>Students List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : users && users.length > 0 ? (
        <table>
          <thead>
            <tr className='header-menu'>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td><img src="https://s3-alpha-sig.figma.com/img/7f02/c446/9c5672219055d43b0ffb2caf907f4b0d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PFVQRE93Ps0mYkeYzBNobbgMeY8mqwmtKMg5f6B4nSW9TefrTi06-p53gVaf116j89m0oPaUXhdUhtWwBS0yq7MbHX~KdBIyONkEAyKxgYNfCH38a56RnU-zXUZkpvhRNlgXVWOWEvY-BHn92k~ofbonTquVm7M3msnhhAvMKVFQmmqKKt6pKfTpXlpsGZImj0gKzGVqvCK-BgZc8BMoDULDLptKC8eHYekdEC0f1~9-02KV4aOAygAmgh0DwWRuDfRHjJ1CW9iqq57uPUcXb8jrntA6j2IKoDmbNHneUWlB3VTQupDZU9b2JFukNaVADvz6h3Tzi7W~98QANXYzOA__" alt="" /></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                <button onClick={() => deleteUser(user.id)}>
                    <FontAwesomeIcon icon={faPencilAlt} /> 
                    </button>
                  <button onClick={() => deleteUser(user.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default UserList;
