import apiUrl from '../apiConfig';
import axios from 'axios';


// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All Articles
const getAllUser = () => {
    return axios.get(`${apiUrl}/user`);
};

// Delete Article by ID
const deleteUserByID = (id) => {
    return axios.delete(`${apiUrl}/user/${id}`);
}

const addNewUser = (user) => {
    console.log('addNewUser', user)
    return axios.post(`${apiUrl}/user`, user);
}
export { getAllUser, deleteUserByID, addNewUser };

// export { getAllArticles, deleteArticleByID };