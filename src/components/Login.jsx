import React from "react";
import api from '../api';
import { useState } from "react";
import qs from 'qs'; 

const Login = () => {
//feat
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });

    const HandleFormSubmit = async (event) =>{
        event.preventDefault();
        try{
            const data = qs.stringify(formData);
            const reponse = await api.post('auth/login',data,{
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'accept': 'application/json',
                },
                withCredentials:true
            },
            { withCredentials: true }
            );
            console.log(reponse.data)
        }
        catch(error){
            console.log('Error: ', error.message);
        }
    }
    const handleInputChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
    return(
        <div className="formWrapper">
        
            <div>
            <div className="info">
                <h3>Profile</h3>
                <p>This information will be displayed publicly so be careful what you share.</p>
            </div>
            <h3>Personal info</h3>
            <form onSubmit={HandleFormSubmit}className="input-fields">
                
                <label htmlFor="username">Email</label>
                <input
                    type="email"
                    id="username"
                    name="username"
                    onChange={handleInputChange}
                    value={formData.username}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleInputChange}
                    value={formData.password}
                />

            <button type="submit">Submit</button>
        </form>
        </div>
        </div>
    )


}

export default Login;
