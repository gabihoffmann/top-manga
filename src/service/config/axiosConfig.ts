import axios from "axios";

/**
 * Axios - request client
 */
export const AxiosConfig = axios.create({
  baseURL: import.meta.env.VITE_API_MANGA_BASE_URL,
});
