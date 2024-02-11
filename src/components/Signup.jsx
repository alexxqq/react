import React from "react";
import api from '../api';
import { useState } from "react";
import qs from 'qs'; 

const Signup = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });

    const HandleFormSubmit = async (event) =>{
        event.preventDefault();
        try{
            console.log(formData);
            await api.post('auth/register',{
                
                ...formData
              }

          
            );
            console.log('Succesfull api send')
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
                <h3>Sign Up</h3>
                <p>This information will be displayed publicly so be careful what you share.</p>
            </div>
            <h3>Personal info</h3>
            <form onSubmit={HandleFormSubmit}className="input-fields">
            <label htmlFor="username">Username</label>
                <input
                    type="username"
                    id="username"
                    name="username"
                    onChange={handleInputChange}
                    value={formData.username}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    value={formData.email}
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

export default Signup;