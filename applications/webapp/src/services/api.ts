import Cookies from "js-cookie";

const API_BASE_URL = "http://localhost:8000";

const getAuthToken = (): string | null => {
  return Cookies.get("authToken") || null;
};

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `HTTP error! Status: ${response.status}, Message: ${errorData.message}`
    );
  }
  return response.json();
};

export const get = async (endpoint: string): Promise<any> => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return handleResponse(response);
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error;
  }
};

export const post = async (endpoint: string, data: any): Promise<any> => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(data),
    });

    return handleResponse(response);
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};

export const patch = async (endpoint: string, data: any): Promise<any> => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(data),
    });

    return handleResponse(response);
  } catch (error) {
    console.error("Error making PATCH request:", error);
    throw error;
  }
};

export const del = async (endpoint: string): Promise<any> => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "DELETE",
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return handleResponse(response);
  } catch (error) {
    console.error("Error making DELETE request:", error);
    throw error;
  }
};
