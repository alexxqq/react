import React from 'react';
import { useState } from 'react';
import api from '../api';
import qs from 'qs';
const Nav = () => {
    const [input,setInput] = useState("");
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("Search submitted:", input);
    };
    const logout = async () =>{

    await api.post('auth/logout', {}, { withCredentials: true })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });
    }
    return(
        <nav>
            <a href="/">Workspace</a>
            
            <div className="search">
                <input 
                type="text"
                value={input} 
                onChange={handleInputChange} 
                placeholder='search...'
                />

                <button 
                className="btn"  
                type="submit"
                >
                    Search
                    </button>
            </div>

            <div className="left-part">
                <a href="/signup">Sign up</a>
                <a href="/login">Log in</a>
                <a onClick={logout}>Log out</a>
            </div>



        </nav>
    );

}

export default Nav;