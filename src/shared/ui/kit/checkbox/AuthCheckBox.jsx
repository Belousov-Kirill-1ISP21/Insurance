import React from 'react';
import styles from '@shared/css/authentication/general/auth-checkbox.module.css';

export const AuthCheckBox = (props) => {
    const {id, register, labelText} = props;

    return (<>

            <div className={styles.authCheckboxContainer}>
                        <input 
                            className={styles.authCheckbox} 
                            type="checkbox"
                            id={id}
                            {...register} 
                        />
                        <label htmlFor={id} className={styles.authCheckboxLabel}>
                            {labelText}
                        </label> 
            </div>
            
        </>
    );
};