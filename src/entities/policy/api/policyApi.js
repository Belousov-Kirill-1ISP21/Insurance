import { apiClient } from '@shared/api/client';
import { retryRequest } from '@shared/api/interceptors';
import { IS_DEMO_MODE } from '@shared/api/config';
import { 
  transformPostToPolicy, 
  generateDemoPolicies 
} from '../lib/policyHelpers';

export const getInsurancePolicies = async () => {
  if (IS_DEMO_MODE) {
    return generateDemoPolicies();
  }

  try {
    const [postsResponse, usersResponse] = await Promise.all([
      retryRequest(() => apiClient.get('/posts')),
      retryRequest(() => apiClient.get('/users'))
    ]);

    const users = usersResponse.data.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});

    const apiPolicies = postsResponse.data.map(post => 
      transformPostToPolicy(post, users[post.userId] || { 
        name: `Клиент ${post.userId}`, 
        id: post.userId 
      })
    );
    
    return apiPolicies;
  } catch (error) {
    console.warn('API недоступен, используем демо-данные:', error.message);
    return generateDemoPolicies();
  }
};

export const createInsurancePolicy = async (policyData) => {
  if (IS_DEMO_MODE) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      id: Date.now(),
      policyNumber: `POL-${String(Date.now()).slice(-3)}`,
      ...policyData,
      status: 'Активен',
      isDemo: true
    };
  }

  try {
    const response = await retryRequest(() => 
      apiClient.post('/posts', {
        title: `Insurance Policy for ${policyData.clientName}`,
        body: JSON.stringify(policyData),
        userId: 1
      })
    );

    return {
      id: response.data.id,
      policyNumber: `POL-${String(response.data.id).padStart(3, '0')}`,
      ...policyData,
      status: 'Активен',
      userId: 1
    };
  } catch (error) {
    console.warn('API создания недоступен', error.message);
    return {
      id: Date.now(),
      policyNumber: `POL-${String(Date.now()).slice(-3)}`,
      ...policyData,
      status: 'Активен',
      isDemo: true
    };
  }
};

export const updateInsurancePolicy = async (policyId, policyData) => {
  if (IS_DEMO_MODE) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { id: policyId, ...policyData, isDemo: true };
  }

  try {
    const response = await retryRequest(() =>
      apiClient.put(`/posts/${policyId}`, {
        id: policyId,
        title: `Updated Insurance Policy for ${policyData.clientName}`,
        body: JSON.stringify(policyData),
        userId: 1
      })
    );

    return {
      id: policyId,
      policyNumber: `POL-${String(policyId).padStart(3, '0')}`,
      ...policyData,
      status: policyData.status || 'Активен',
      userId: 1
    };
  } catch (error) {
    console.warn('API обновления недоступен', error.message);
    return { id: policyId, ...policyData, isDemo: true };
  }
};

export const deleteInsurancePolicy = async (policyId) => {
  if (IS_DEMO_MODE) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return policyId;
  }

  try {
    await retryRequest(() => apiClient.delete(`/posts/${policyId}`));
    return policyId;
  } catch (error) {
    console.warn('API удаления недоступен', error.message);
    return policyId;
  }
};