import axios from "axios";

const API_URL = `${import.meta.env.VITE_APP_CHATBOT_BACKEND_URL}/chat`;


export const fetchChatResponse = async (pregunta: string) => {
  try {
    const response = await axios.post(`${API_URL}`,{text: pregunta});
    return response.data;
  } catch (error) {
    console.log("Error fetching chat response:", error);
    throw error;
  }
};
