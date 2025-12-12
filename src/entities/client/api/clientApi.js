import { apiClient } from '@shared/api/client';
import { retryRequest } from '@shared/api/interceptors';
import { IS_DEMO_MODE } from '@shared/api/config';

const transformUserToClient = (user) => ({
  id: user.id,
  name: user.name,
  phone: user.phone || `+7 (999) ${100 + user.id}-${1000 + user.id}`,
  email: user.email,
  username: user.username
});

const generateDemoClients = () => {
  return [
    { id: 1, name: 'Иван Иванов', phone: '+7 (999) 123-45-67', email: 'ivan@mail.com', username: 'ivanov' },
    { id: 2, name: 'Петр Петров', phone: '+7 (999) 234-56-78', email: 'petr@mail.com', username: 'petrov' },
    { id: 3, name: 'Мария Сидорова', phone: '+7 (999) 345-67-89', email: 'maria@mail.com', username: 'sidorova' }
  ];
};

export const getClients = async () => {
  if (IS_DEMO_MODE) {
    return generateDemoClients();
  }

  try {
    const response = await retryRequest(() => apiClient.get('/users'));
    return response.data.map(transformUserToClient);
  } catch (error) {
    console.warn('API клиентов недоступен, используем демо-данные:', error.message);
    return generateDemoClients();
  }
};