import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '@shared/css/authentication/sign-in/sign-in-form.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@features/auth/lib/useAuth';
import { TextInput } from '@shared/ui/kit/input/TextInput';
import { AuthCheckBox } from '@shared/ui/kit/checkbox/AuthCheckBox';
 
const signInSchema = yup.object().shape({ 
  email: yup
    .string()
    .email('Введите корректный email')
    .required('Email обязателен для заполнения'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .required('Пароль обязателен для заполнения'),
  rememberMe: yup
    .boolean()
});

export const SignInForm = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signInSchema) 
    });

    const onSubmit = async (data) => {
        try {
            login();
            navigate('/profile');
        } catch (error) {
            console.error('Ошибка входа:', error);
        }
    };

    const TextInputProps = [
        {id:0, className: styles.signInFormInput, placeholder: "Email", type: "email", register: register('email'), error: errors.email, errorClassName: styles.errorMessage},
        {id:1, className: styles.signInFormInput, placeholder: "Пароль", type: "password", register: register('password'), error: errors.password, errorClassName: styles.errorMessage},
    ];

    return (
      <div className={styles.signInForm}>
          <form 
              className={styles.signInFormForm} 
              onSubmit={handleSubmit(onSubmit)}
          >
              <h1 className={styles.signInFormH1}>Вход в аккаунт</h1>
              
              {TextInputProps.map((TextInputInfo,key)=><TextInput 
                                        key={key}
                                        className={TextInputInfo.className} 
                                        placeholder={TextInputInfo.placeholder} 
                                        type={TextInputInfo.type}
                                        register={TextInputInfo.register}
                                        error={TextInputInfo.error}
                                        errorClassName={TextInputInfo.errorClassName}
                                    />)}
              
              <div className={styles.signInFormContainer}>

                  <AuthCheckBox id="rememberMeCheckBox" register={register('rememberMe')} labelText='Remember Me'/>

                  <button type="button" className={styles.signInFormForgotPasswordButton}>
                      Забыли пароль?
                  </button>
                  
              </div>
              
              <button type="submit" className={styles.signInFormButton}>
                  Войти
              </button>
              
          </form>
      </div>
  );
};