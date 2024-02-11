import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const AUTH_API_URL = 'http://localhost:8000/auth'; // Replace with your backend URL

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);

    const { data, isLoading, error } = useQuery('user', async () => {
        const token = localStorage.getItem('token');
        if (!token) return null;

        const response = await axios.get(`${AUTH_API_URL}/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${AUTH_API_URL}/login`, { email, password });
            const token = response.data.access_token;
            localStorage.setItem('token', token);
            setUserData(response.data.user);
            setIsAuthenticated(true);
        } catch (error) {
            // Handle login errors
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUserData(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, userData, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };