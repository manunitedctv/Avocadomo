const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8081/api';

export const API_ENDPOINTS = {
    // Auth endpoints
    auth: {
        login: `${API_BASE_URL}/auth/login`,
        register: `${API_BASE_URL}/auth/register`,
        logout: `${API_BASE_URL}/auth/logout`,
        refreshToken: `${API_BASE_URL}/auth/refresh-token`
    },

    // User endpoints
    users: {
        profile: `${API_BASE_URL}/users/profile`,
        updateProfile: `${API_BASE_URL}/users/profile/update`,
        changePassword: `${API_BASE_URL}/users/change-password`
    },

    // Course endpoints
    courses: {
        list: `${API_BASE_URL}/courses`,
        detail: (id) => `${API_BASE_URL}/courses/${id}`,
        enroll: (id) => `${API_BASE_URL}/courses/${id}/enroll`,
        progress: (id) => `${API_BASE_URL}/courses/${id}/progress`
    },

    // Video endpoints
    videos: {
        list: `${API_BASE_URL}/videos`,
        detail: (id) => `${API_BASE_URL}/videos/${id}`,
        watch: (id) => `${API_BASE_URL}/videos/${id}/watch`
    },

    // Note endpoints
    notes: {
        list: `${API_BASE_URL}/notes`,
        create: `${API_BASE_URL}/notes`,
        detail: (id) => `${API_BASE_URL}/notes/${id}`,
        update: (id) => `${API_BASE_URL}/notes/${id}`,
        delete: (id) => `${API_BASE_URL}/notes/${id}`
    },

    // Exam endpoints
    exams: {
        list: `${API_BASE_URL}/exams`,
        detail: (id) => `${API_BASE_URL}/exams/${id}`,
        start: (id) => `${API_BASE_URL}/exams/${id}/start`,
        submit: (id) => `${API_BASE_URL}/exams/${id}/submit`,
        result: (id) => `${API_BASE_URL}/exams/${id}/result`
    }
};

export const API_HEADERS = {
    'Content-Type': 'application/json'
}; 