import axios from 'axios'

import { base_url } from './baseUrl';

class dataAPI {

    // Place
    static async getAllPlaces() {
        try {
            const response = await axios.get(`${base_url}admin/place`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async addPlace(place) {
        try {
            const response = await axios.post(`${base_url}admin/place`,place);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updatePlace(id){
        try {
            const response = await axios.put(`${base_url}admin/place/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deletePlace(id){
        try {
            const response = await axios.delete(`${base_url}admin/place/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Room
    static async getAllRooms() {
        try {
            const response = await axios.get(`${base_url}admin/room`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async addRoom(room) {
        try {
            const response = await axios.post(`${base_url}admin/room`,room);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateRoom(id){
        try {
            const response = await axios.put(`${base_url}admin/room/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteRoom(id){
        try {
            const response = await axios.delete(`${base_url}admin/room/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Blog
    static async getAllBlogs() {
        try {
            const response = await axios.get(`${base_url}admin/blog`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async addBlog(blog) {
        try {
            const response = await axios.post(`${base_url}admin/blog`,blog);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateBlog(id){
        try {
            const response = await axios.put(`${base_url}admin/blog/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteBlog(id){
        try {
            const response = await axios.delete(`${base_url}admin/blog/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Order
    static async getAllOrders() {
        try {
            const response = await axios.get(`${base_url}admin/book`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateOrder(id){
        try {
            const response = await axios.put(`${base_url}admin/book/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteOrder(id){
        try {
            const response = await axios.delete(`${base_url}admin/book/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default dataAPI;