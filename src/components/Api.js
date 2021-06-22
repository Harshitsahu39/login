import axios from 'axios'

export const getData =  () => {
    try {
        return  axios.get('https://reqres.in/api/users?page=2')
    } catch (err) {
        console.error(err.message);
    }
    
};


export const editData = (id , user) => {
    try {
        console.log(id)
      return axios.put(`https://reqres.in/api/users/${id}`, user);
    } catch (err) {
        console.error(err.message);
    }
    
};


export const viewData = (id) => {
    try {
        console.log(id)
         return axios.get(`https://reqres.in/api/users/${id}`)
  
    } catch (err) {
        console.error(err.message);
    }
    
};

export const deleteData = (id) => {
    try {
        console.log(id)
         return axios.delete(`https://reqres.in/api/users/${id}`)
      } catch (err) {
        console.error(err.message);
    }
    
};
