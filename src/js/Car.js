// Car.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/scs';

export const fetchCars = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cars/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cars:', error);
        return [];
    }
};

export const fetchCarImages = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/car-images/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching car images:', error);
        return [];
    }
};

export const fetchCarDetails = async (carId) => {
    try {
        const response = await axios.get(`${BASE_URL}/cars/${carId}/`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching car details:', error);
        return null;  // Return null to avoid undefined issues in CarDetails.jsx
    }
};

/*

// Add car to wishlist
export const addToWishlist = async (carId) => {
    try {
        const response = await axios.post(`${BASE_URL}/wishlist/`, { car: carId }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding to wishlist:', error);
    }
};

// Fetch wishlist
export const fetchWishlist = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/wishlist/`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        return [];
    }
};

// Remove car from wishlist
export const removeFromWishlist = async (wishlistId) => {
    try {
        await axios.delete(`${BASE_URL}/wishlist/${wishlistId}/`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
    } catch (error) {
        console.error('Error removing from wishlist:', error);
    }
};

*/

// Add car to wishlist (No Authentication)
export const addToWishlist = async (carId) => {
    try {
        const response = await axios.post(`${BASE_URL}/wishlist/`, {
            user: 6, // Send user_id
            car: carId,    // Send car_id
        });
        return response.data;
    } catch (error) {
        console.error("Error adding to wishlist:", error);
    }
};
// Fetch wishlist (No Authentication)
export const fetchWishlist = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/wishlist/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        return [];
    }
};

// Remove car from wishlist (No Authentication)
export const removeFromWishlist = async (wishlistId) => {
    try {
        await axios.delete(`${BASE_URL}/wishlist/${wishlistId}/`);
    } catch (error) {
        console.error("Error removing from wishlist:", error);
    }
};
