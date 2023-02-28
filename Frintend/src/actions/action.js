import axios from 'axios'
const API_URL = "http://localhost:4000/api/user"


const login = (data) => async(dispatch)=>{
 
      // console.log(user)
      
         await axios.post(`${API_URL}/login`,data)
        .then((res) => {    
          localStorage.setItem('data',res.data.user.name)
          localStorage.setItem('role',res.data.user.role)
          window.location.replace('/'+ res.data.user.role);
          dispatch({
            type:'LOGIN_SUCCESS',
            payload:data
          })
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type:'LOGIN_FALSE',
          })
        })
    

}

const register = (data) => async(dispatch)=>{
        await axios.post(`${API_URL}/register`,data)
        .then((res) =>{
       
    
  
    
          window.location.replace('/login');
          dispatch({
            type:'REGISTER_SUCCESS',
            payload:data
          })
        
     
    
        }) 
        .catch ((error)=>{
          console.log(error.data);
          dispatch({
            type:'REGISTER_FALSE',
          })
        
        })

}
export {login,register}