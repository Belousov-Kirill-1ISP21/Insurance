import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '@shared/css/authentication/sign-up/sign-up-form.module.css';
import { useNavigate } from 'react-router-dom';
import { TextInput } from '@shared/ui/kit/input/TextInput';

const schema = yup.object().shape({
    surname: yup.string().required('Фамилия обязательна'),
    name: yup.string().required('Имя обязательно'),
    patronymic: yup.string().required('Отчество обязательно'),
    phone: yup.string()
        .matches(
            /^\+7\d{3}\d{3}\d{4}$/, 
            'Телефон должен быть в формате +70000000000 (11 цифр после +7)'
        )
        .required('Телефон обязателен'),
    email: yup.string().email('Неверный формат Email').required('Email обязателен'),
    password: yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Пароль обязателен'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
        .required('Подтверждение пароля обязательно'),
});

export const SignUpForm = (props) => {
    const navigate = useNavigate(); 

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        console.log(data);
        navigate('/sign-in'); 
    };

    const TextInputProps = [
        {id:0, className: styles.signUpFormInput, placeholder: "Фамилия", type: "text", register: register('surname'), error: errors.surname, errorClassName: styles.errorMessage},
        {id:1, className: styles.signUpFormInput, placeholder: "Имя", type: "text", register: register('name'), error: errors.name, errorClassName: styles.errorMessage},
        {id:2, className: styles.signUpFormInput, placeholder: "Отчество", type: "text", register: register('patronymic'), error: errors.patronymic, errorClassName: styles.errorMessage},
        {id:3, className: styles.signUpFormInput, placeholder: "+70000000000", type: "tel", register: register('phone'), error: errors.phone, errorClassName: styles.errorMessage},
        {id:4, className: styles.signUpFormInput, placeholder: "Email", type: "email", register: register('email'), error: errors.email, errorClassName: styles.errorMessage},
        {id:5, className: styles.signUpFormInput, placeholder: "Пароль", type: "password", register: register('password'), error: errors.password, errorClassName: styles.errorMessage},
        {id:6, className: styles.signUpFormInput, placeholder: "Повторите пароль", type: "password", register: register('confirmPassword'), error: errors.confirmPassword, errorClassName: styles.errorMessage},
    ];

    return (
      <div className={styles.signUpForm}>
          <form className={styles.signUpFormForm} onSubmit={handleSubmit(onSubmit)}>
              <h1 className={styles.signUpFormH1}>Регистрация</h1>

              {TextInputProps.map((TextInputInfo,key)=><TextInput 
                                        key={key}
                                        className={TextInputInfo.className} 
                                        placeholder={TextInputInfo.placeholder} 
                                        type={TextInputInfo.type}
                                        register={TextInputInfo.register}
                                        error={TextInputInfo.error}
                                        errorClassName={TextInputInfo.errorClassName} 
                                    />)}
              

              <button type="submit" className={styles.signUpFormButton}>
                  Зарегистрироваться
              </button>

              <p className={styles.signUpFormText}>
                  By Creating an Account, it means you agree to our Privacy Policy and Terms of Service
              </p>
          </form>
      </div>
  );
};