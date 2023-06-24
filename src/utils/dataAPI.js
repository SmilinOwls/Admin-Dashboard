import axios from 'axios'
import { base_url } from './baseUrl';

class DataAPI {
    // Place
    static async getAllPlaces() {
        try {
            const response = await axios.get(`${base_url}/place/admin`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async addPlace(place) {
        try {
            const response = await axios.post(`${base_url}/place/admin`,place);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updatePlace(id){
        try {
            const response = await axios.put(`${base_url}/place/admin/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deletePlace(id){
        try {
            const response = await axios.delete(`${base_url}/place/admin/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Room
    static async getAllRooms() {
        try {
            const response = await axios.get(`${base_url}/room/admin`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async addRoom(room) {
        try {
            const response = await axios.post(`${base_url}/room/admin`,room);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateRoom(id){
        try {
            const response = await axios.put(`${base_url}/room/admin/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteRoom(id){
        try {
            const response = await axios.delete(`${base_url}/room/admin/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Blog
    static async getAllBlogs() {
        try {
            const response = await axios.get(`${base_url}/blog/admin`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async addBlog(blog) {
        try {
            const response = await axios.post(`${base_url}/blog/admin`,blog);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateBlog(id){
        try {
            const response = await axios.put(`${base_url}/blog/admin/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteBlog(id){
        try {
            const response = await axios.delete(`${base_url}/blog/admin/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Order
    static async getAllOrders() {
        try {
            const response = await axios.get(`${base_url}/book`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateOrder(id){
        try {
            const response = await axios.put(`${base_url}/book/admin/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteOrder(id){
        try {
            const response = await axios.delete(`${base_url}/book/admin/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Site
    static async getAllSites() {
        try {
            const response = await axios.get(`${base_url}/sites/admin`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}

export default DataAPI;