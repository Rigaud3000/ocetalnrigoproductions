import { apiRequest } from "./queryClient";

export async function sendMessageToAI(message: string): Promise<{ id: number; response: string }> {
  try {
    const response = await apiRequest("POST", "/api/ask", { message });
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || "Failed to get AI response");
    }
    
    return data.data;
  } catch (error) {
    console.error("Error sending message to AI assistant:", error);
    throw error;
  }
}
