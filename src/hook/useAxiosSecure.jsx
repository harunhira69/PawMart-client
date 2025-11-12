import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:3000", // change to your production base URL
});

const useAxiosSecure = () => {
  const { users, signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Attach token before request
    const requestInterceptor = instance.interceptors.request.use(
      async (config) => {
        if (users) {
          const token = await users.getIdToken?.();
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Handle 401/403 globally
    const responseInterceptor = instance.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
          console.log("Unauthorized! Logging out...");
          signOutUser().then(() => navigate("/register"));
        }
        return Promise.reject(error);
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [users, signOutUser, navigate]);

  return instance;
};

export default useAxiosSecure;
