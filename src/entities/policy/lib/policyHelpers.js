import { INSURANCE_TYPES, COVERAGE_TYPES } from '../model/policyModel';

export const getInsuranceType = (id) => {
  const types = Object.values(INSURANCE_TYPES);
  return types[id % types.length];
};

export const getCoverageType = (id) => {
  const coverages = Object.values(COVERAGE_TYPES);
  return coverages[id % coverages.length];
};

export const calculatePrice = (id) => Math.floor(5000 + (id * 1000));

export const transformPostToPolicy = (post, user) => ({
  id: post.id,
  policyNumber: `POL-${String(post.id).padStart(3, '0')}`,
  clientName: user.name,
  insuranceType: getInsuranceType(post.id),
  coverage: getCoverageType(post.id),
  premium: calculatePrice(post.id),
  startDate: new Date(Date.now() - (post.id * 86400000)).toISOString().split('T')[0],
  endDate: new Date(Date.now() + (365 * 86400000) - (post.id * 86400000)).toISOString().split('T')[0],
  status: (post.id % 3 === 0 ? 'Завершен' : 'Активен'),
  userId: post.userId
});

export const generateDemoPolicies = () => {
  const demoPolicies = [];
  for (let i = 1; i <= 20; i++) {
    demoPolicies.push({
      id: i,
      policyNumber: `POL-${String(i).padStart(3, '0')}`,
      clientName: `Клиент ${i}`,
      insuranceType: getInsuranceType(i),
      coverage: getCoverageType(i),
      premium: calculatePrice(i),
      startDate: new Date(Date.now() - (i * 86400000)).toISOString().split('T')[0],
      endDate: new Date(Date.now() + (365 * 86400000) - (i * 86400000)).toISOString().split('T')[0],
      status: (i % 3 === 0 ? 'Завершен' : 'Активен'),
      userId: 1,
      isDemo: true
    });
  }
  return demoPolicies;
};