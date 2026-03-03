import axios from "axios";

const server = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: `${server}/api/v1`
});

api.interceptors.request.use((config) => {
  const isFormData =
    typeof config.data === "object" &&
    config.data !== null &&
    config.data.constructor?.name === "FormData";

  if (!isFormData) {
    config.headers["Content-Type"] = "application/json";
  } else {
    delete config.headers["Content-Type"];
  }

  return config;
});

export default api;
