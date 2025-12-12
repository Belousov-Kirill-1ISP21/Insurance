import { apiClient } from './client';

const retryRequest = async (requestFn, retries = 2, delay = 1000) => {
  try {
    return await requestFn();
  } catch (error) {
    if (retries > 0) {
      console.log(`Повторная попытка... Осталось попыток: ${retries}`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return retryRequest(requestFn, retries - 1, delay * 2);
    }
    throw error;
  }
};

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (!originalRequest._retry && error.response?.status >= 500) {
      originalRequest._retry = true;
      return retryRequest(() => apiClient(originalRequest));
    }
    
    return Promise.reject(error);
  }
);

export { retryRequest };