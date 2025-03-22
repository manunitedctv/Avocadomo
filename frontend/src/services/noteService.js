import axios from 'axios';

const API_URL = 'http://localhost:8081/api/notes';

const noteService = {
    getAllNotes: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching notes:', error);
            throw error;
        }
    },

    createNote: async (note) => {
        try {
            const response = await axios.post(API_URL, note);
            return response.data;
        } catch (error) {
            console.error('Error creating note:', error);
            throw error;
        }
    },

    updateNote: async (id, note) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, note);
            return response.data;
        } catch (error) {
            console.error('Error updating note:', error);
            throw error;
        }
    },

    deleteNote: async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
        } catch (error) {
            console.error('Error deleting note:', error);
            throw error;
        }
    }
};

export default noteService; 