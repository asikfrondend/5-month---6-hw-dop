import axios from 'axios';

export const deleteUserById = (userId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      
      dispatch({
        type: 'DELETE_USER_SUCCESS',
      });
    } catch (error) {

      dispatch({
        type: 'DELETE_USER_FAILURE',
        payload: error.response.data.error // передаем сообщение об ошибке
      });
    }
  };
};
