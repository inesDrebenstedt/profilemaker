// src/services/apiService.js

const API_BASE_URL = 'http://host.docker.internal:5000/api/process';

class ApiService {
  // Method to make POST request
  static async postData(endpoint, data) {
    console.log('sending Text to BE!')
    const url = `${API_BASE_URL}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error occurred');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error in postData:', error);
      throw error;
    }
  }
}

export default ApiService;