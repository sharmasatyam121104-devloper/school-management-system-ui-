import axios from 'axios';
const server = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
    // Replace with your server URL
    baseURL: `${server}/api/v1`, 
    timeout: 5000, // Optional: Request fails after 5 seconds
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;