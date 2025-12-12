import React from 'react';
import styles from '@shared/css/admin-panel/admin-panel.module.css';

export const AdminHeader = ({ onClearForm, loading }) => {
  return (
    <div className={styles.header}>
      <h1>Панель администратора</h1>
      <button onClick={onClearForm} disabled={loading}>
        Очистить форму
      </button>
    </div>
  );
};