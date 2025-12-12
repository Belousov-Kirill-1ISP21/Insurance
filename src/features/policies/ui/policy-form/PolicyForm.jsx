import React from 'react';
import styles from '@shared/css/admin-panel/admin-panel.module.css';

export const PolicyForm = ({ 
  newPolicy, 
  onPolicyChange, 
  onCreatePolicy, 
  loading 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreatePolicy(newPolicy);
  };

  const handleChange = (field, value) => {
    onPolicyChange({ ...newPolicy, [field]: value });
  };

  return (
    <div className={styles.section}>
      <h2>Создать новый полис</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя клиента"
          value={newPolicy.clientName}
          onChange={(e) => handleChange('clientName', e.target.value)}
          required
          disabled={loading}
        />
        <select
          value={newPolicy.insuranceType}
          onChange={(e) => handleChange('insuranceType', e.target.value)}
          disabled={loading}
        >
          <option value="Автострахование">Автострахование</option>
          <option value="Медицинское страхование">Медицинское страхование</option>
          <option value="Имущественное страхование">Имущественное страхование</option>
          <option value="Страхование жизни">Страхование жизни</option>
        </select>
        <select
          value={newPolicy.coverage}
          onChange={(e) => handleChange('coverage', e.target.value)}
          disabled={loading}
        >
          <option value="Полное">Полное</option>
          <option value="Стандартное">Стандартное</option>
          <option value="Базовое">Базовое</option>
        </select>
        <input
          type="number"
          placeholder="Стоимость"
          value={newPolicy.premium}
          onChange={(e) => handleChange('premium', parseInt(e.target.value) || 0)}
          required
          disabled={loading}
        />
        <input
          type="date"
          value={newPolicy.startDate}
          onChange={(e) => handleChange('startDate', e.target.value)}
          required
          disabled={loading}
        />
        <input
          type="date"
          value={newPolicy.endDate}
          onChange={(e) => handleChange('endDate', e.target.value)}
          required
          disabled={loading}
        />
        <button type="submit" disabled={loading || !newPolicy.clientName.trim()}>
          {loading ? 'Создание...' : 'Создать полис'}
        </button>
      </form>
    </div>
  );
};