import React, { useEffect, useState, useMemo } from 'react';
import styles from '@shared/css/admin-panel/admin-panel.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { 
  setEditingPolicy, 
  clearEditingPolicy,
  fetchPolicies
} from '@shared/store/slices/policiesSlice';
import { 
  useCreatePolicy, 
  useUpdatePolicy, 
  useDeletePolicy
} from '@shared/store/hooks';
import { AdminHeader } from '@features/policies/ui/admin-header/AdminHeader';
import { PolicyForm } from '@features/policies/ui/policy-form/PolicyForm';
import { PoliciesList } from '@features/policies/ui/policies-list/PoliciesList';

export function AdminPanelPage() {
  const dispatch = useDispatch();
  const { items: policies, loading, error, editingPolicy } = useSelector(state => state.policies);
  const { create: createPolicy } = useCreatePolicy();
  const { update: updatePolicy } = useUpdatePolicy();
  const { remove: deletePolicy } = useDeletePolicy();
  
  const [newPolicy, setNewPolicy] = useState({
    clientName: '',
    insuranceType: 'Автострахование',
    coverage: 'Полное',
    premium: 5000,
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 365 * 86400000).toISOString().split('T')[0]
  });

  const [currentPage, setCurrentPage] = useState(1);
  const POLICIES_PER_PAGE = 10;
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [previousPoliciesCount, setPreviousPoliciesCount] = useState(0);

  useEffect(() => {
    dispatch(fetchPolicies());
  }, [dispatch]);

  const sortedPolicies = useMemo(() => {
    return [...policies].sort((a, b) => a.id - b.id);
  }, [policies]);

  const totalPages = Math.ceil(sortedPolicies.length / POLICIES_PER_PAGE);
  const indexOfLastPolicy = currentPage * POLICIES_PER_PAGE;
  const indexOfFirstPolicy = indexOfLastPolicy - POLICIES_PER_PAGE;
  const currentPolicies = sortedPolicies.slice(indexOfFirstPolicy, indexOfLastPolicy);

  useEffect(() => {
    if (sortedPolicies.length > previousPoliciesCount) {
      if (totalPages > 0) {
        setCurrentPage(totalPages);
      }
    }
    setPreviousPoliciesCount(sortedPolicies.length);
  }, [sortedPolicies.length, previousPoliciesCount, totalPages]);

  useEffect(() => {
    if (sortedPolicies.length > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [sortedPolicies.length, totalPages, currentPage]);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  const handleCreatePolicy = async (policyData) => {
    try {
      await createPolicy(policyData);
      setNewPolicy({
        clientName: '',
        insuranceType: 'Автострахование',
        coverage: 'Полное',
        premium: 5000,
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date(Date.now() + 365 * 86400000).toISOString().split('T')[0]
      });
      showNotification('Полис успешно создан', 'success');
    } catch (error) {
      console.error('Failed to create policy:', error);
      showNotification('Ошибка при создании полиса', 'error');
    }
  };

  const handleClearForm = () => {
    setNewPolicy({
      clientName: '',
      insuranceType: 'Автострахование',
      coverage: 'Полное',
      premium: 5000,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 365 * 86400000).toISOString().split('T')[0]
    });
  };

  const handleUpdatePolicy = async (e) => {
    e.preventDefault();
    if (!editingPolicy) return;
    
    try {
      await updatePolicy(editingPolicy.id, editingPolicy);
      dispatch(clearEditingPolicy());
    } catch (error) {
      console.error('Failed to update policy:', error);
    }
  };

  const handleDeletePolicy = async (policyId) => {
    if (window.confirm('Вы уверены, что хотите удалить этот полис?')) {
      try {
        await deletePolicy(policyId);
      } catch (error) {
        console.error('Failed to delete policy:', error);
      }
    }
  };

  const handleStartEditing = (policy) => {
    dispatch(setEditingPolicy({...policy}));
  };

  const handleCancelEditing = () => {
    dispatch(clearEditingPolicy());
  };

  const handlePolicyEditChange = (updatedPolicy) => {
    dispatch(setEditingPolicy(updatedPolicy));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading && policies.length === 0) {
    return <div className={styles.loading}>Загрузка полисов...</div>;
  }

  return (
    <div className={styles.adminPanel}>
      <AdminHeader 
        onClearForm={handleClearForm}
        loading={loading}
      />

      {error && (
        <div className={styles.error}>
          Ошибка: {error}
        </div>
      )}

      {notification.message && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}

      <div className={styles.sections}>
        <PolicyForm 
          newPolicy={newPolicy}
          onPolicyChange={setNewPolicy}
          onCreatePolicy={handleCreatePolicy}
          loading={loading}
        />

        <PoliciesList
          policies={sortedPolicies}
          currentPolicies={currentPolicies}
          editingPolicy={editingPolicy}
          loading={loading}
          totalPages={totalPages}
          currentPage={currentPage}
          onStartEditing={handleStartEditing}
          onUpdatePolicy={handleUpdatePolicy}
          onCancelEditing={handleCancelEditing}
          onDeletePolicy={handleDeletePolicy}
          onPageChange={handlePageChange}
          onPolicyEditChange={handlePolicyEditChange}
        />
      </div>
    </div>
  );
}

export default AdminPanelPage;