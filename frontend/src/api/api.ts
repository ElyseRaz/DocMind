import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const registerUser = async (email: any, password: any, username: any) => {
    const res = await axios.post(`${API_URL}/auth/register`, { email, password, username });
    return res.data;
}

export const loginUser = async (email: any, password: any) => {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    return res.data;
}

export const uploadFile = async (file: File, token: string) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post(`${API_URL}/resume/upload`, formData, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
    });
    return res.data;
}

