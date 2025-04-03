import axios from "axios";

const API_URL = "http://localhost:8000/chat"; // Reemplaza con tu URL real


export const fetchChatResponse = async (pregunta: string) => {
  try {
    const response = await axios.post(`${API_URL}`,{text: pregunta});
    return response.data;
  } catch (error) {
    console.log("Error fetching chat response:", error);
    throw error;
  }
};
