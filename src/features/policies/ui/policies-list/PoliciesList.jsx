import React, { useRef, useEffect } from 'react';
import styles from '@shared/css/admin-panel/admin-panel.module.css';

export const PoliciesList = ({
  policies,
  currentPolicies,
  editingPolicy,
  loading,
  totalPages,
  currentPage,
  onStartEditing,
  onUpdatePolicy,
  onCancelEditing,
  onDeletePolicy,
  onPageChange,
  onPolicyEditChange
}) => {
  const renderPagination = () => {
    if (totalPages <= 1) return null;
    
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className={styles.pagination}>
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          Назад
        </button>
        
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`${styles.paginationButton} ${currentPage === number ? styles.active : ''}`}
          >
            {number}
          </button>
        ))}
        
        <button 
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          Вперед
        </button>
      </div>
    );
  };

  const PolicyCard = ({ policy }) => (
    <div key={policy.id} className={`${styles.policy} ${styles[policy.status?.toLowerCase()] || ''}`}>
      {editingPolicy?.id === policy.id ? (
        <EditPolicyForm 
          policy={editingPolicy}
          onUpdate={onUpdatePolicy}
          onCancel={onCancelEditing}
          onChange={onPolicyEditChange}
          loading={loading}
        />
      ) : (
        <PolicyView 
          policy={policy}
          onEdit={() => onStartEditing(policy)}
          onDelete={() => onDeletePolicy(policy.id)}
          loading={loading}
        />
      )}
    </div>
  );

  const EditPolicyForm = ({ policy, onUpdate, onCancel, onChange, loading }) => {
    const inputRef = useRef(null);
    
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, [policy.id]);
  
    return (
      <form className={styles.editForm} onSubmit={onUpdate}>
        <input
          ref={inputRef}
          autoFocus
          type="text"
          value={policy.clientName || ''}
          onChange={(e) => onChange({ ...policy, clientName: e.target.value })}
          disabled={loading}
        />
        <select
          value={policy.insuranceType || ''}
          onChange={(e) => onChange({ ...policy, insuranceType: e.target.value })}
          disabled={loading}
        >
          <option value="Автострахование">Автострахование</option>
          <option value="Медицинское страхование">Медицинское страхование</option>
          <option value="Имущественное страхование">Имущественное страхование</option>
          <option value="Страхование жизни">Страхование жизни</option>
        </select>
        <div className={styles.editActions}>
          <button type="submit" disabled={loading}>
            {loading ? 'Сохранение...' : 'Сохранить'}
          </button>
          <button type="button" onClick={onCancel} disabled={loading}>
            Отмена
          </button>
        </div>
      </form>
    );
  };

  const PolicyView = ({ policy, onEdit, onDelete, loading }) => (
    <>
      <div className={styles.policyHeader}>
        <h3>{policy.policyNumber}</h3>
        <span className={`${styles.status} ${styles[policy.status?.toLowerCase()] || ''}`}>
          {policy.status}
        </span>
      </div>
      <div className={styles.policyInfo}>
        <p><strong>Клиент:</strong> {policy.clientName}</p>
        <p><strong>Тип страхования:</strong> {policy.insuranceType}</p>
        <p><strong>Покрытие:</strong> {policy.coverage}</p>
        <p><strong>Стоимость:</strong> {policy.premium} руб.</p>
        <p><strong>Период:</strong> {policy.startDate} - {policy.endDate}</p>
      </div>
      <div className={styles.policyActions}>
        <button onClick={onEdit} disabled={loading}>
          Редактировать
        </button>
        <button className={styles.delete} onClick={onDelete} disabled={loading}>
          Удалить
        </button>
      </div>
    </>
  );

  return (
    <div className={styles.section}>
      <div className={styles.policiesHeader}>
        <h2>Страховые полисы ({policies.length})</h2>
        <div className={styles.paginationInfo}>
          Страница {currentPage} из {totalPages} 
        </div>
      </div>
      
      <div className={styles.policies}>
        {currentPolicies.length === 0 ? (
          <div className={styles.noPolicies}>Полисы не найдены</div>
        ) : (
          currentPolicies.map((policy) => (
            <PolicyCard key={policy.id} policy={policy} />
          ))
        )}
      </div>

      {renderPagination()}
    </div>
  );
};