import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import styles from '@shared/css/order/order-form.module.css';
import { OrderFormTextInput } from './OrderFormTextInput.jsx';
import { TextInput } from '@shared/ui/kit/input/TextInput';

const orderSchema = yup.object().shape({
  citizenship: yup.string().required('Укажите гражданство'),
  documentType: yup.string().required('Укажите тип документа'),
  documentSeries: yup.string()
    .required('Укажите серию документа')
    .matches(/^[0-9]{4}$/, 'Серия должна содержать 4 цифры'),
  documentNumber: yup.string()
    .required('Укажите номер документа')
    .matches(/^[0-9]{6}$/, 'Номер должен содержать 6 цифр'),
  issuedBy: yup.string().required('Укажите орган, выдавший документ'),
  issueDate: yup.string()
    .required('Укажите дату выдачи')
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Дата должна быть в формате дд.мм.гггг')
});

export const OrderForm = (props) => {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(orderSchema)
  });

  const onSubmit = (data) => {
    console.log('Данные формы:', data);
    navigate('/profile'); 
  };

  const TextInputProps = [
    {id:0, className: styles.orderFormPassportInput, placeholder: "Тип документа", type: "text", register: register('documentType'), error: errors.documentType, errorClassName: styles.errorMessage},
    {id:1, className: styles.orderFormPassportInput, placeholder: "Серия", type: "text", register: register('documentSeries'), error: errors.documentSeries, errorClassName: styles.errorMessage},
    {id:2, className: styles.orderFormPassportInput, placeholder: "Номер", type: "text", register: register('documentNumber'), error: errors.documentNumber, errorClassName: styles.errorMessage}
  ];

  return (
    <div className={styles.orderForm}>
      <div className={styles.orderFormH1Container}>
        <h1 className={styles.orderFormH1}>Заполните форму для оформления тарифа</h1>
      </div>

      <form className={styles.orderFormForm} onSubmit={handleSubmit(onSubmit)}>
      
        <div className={styles.orderFormInputContainer}>
          <OrderFormTextInput 
            h2ClassName={styles.orderFormH2} inputClassName={styles.orderFormInput} errorClassName={styles.errorMessage} 
            h2Text='Гражданство' placeholder='Россия' type="text" register={register('citizenship')} error={errors.citizenship}
          />
        </div>

        <div className={styles.orderFormPassportInputContainer}>

          <h2 className={styles.orderFormH2}>Документ, удостоверяющий личность</h2>

          {TextInputProps.map((TextInputInfo,key)=><TextInput 
                                        key={key}
                                        className={TextInputInfo.className} 
                                        placeholder={TextInputInfo.placeholder} 
                                        type={TextInputInfo.type}
                                        register={TextInputInfo.register}
                                        error={TextInputInfo.error}
                                        errorClassName={TextInputInfo.errorClassName}
                                    />)}
        </div>
        
        <div className={styles.orderFormInputContainer}>
          <OrderFormTextInput 
            h2ClassName={styles.orderFormH2} inputClassName={styles.orderFormInput} errorClassName={styles.errorMessage} 
            h2Text='Орган, выдавший документ' placeholder='Кем выдан' type="text" register={register('issuedBy')} error={errors.issuedBy}
          />
        </div>
        
        <div className={styles.orderFormInputContainer}>
          <OrderFormTextInput 
            h2ClassName={styles.orderFormH2} inputClassName={styles.orderFormInput} errorClassName={styles.errorMessage} 
            h2Text='Дата выдачи' placeholder='дд.мм.гггг' type="text" register={register('issueDate')} error={errors.issueDate}
          />
        </div>

        <div className={styles.orderFormButtonContainer}>
          <button type="submit" className={styles.orderFormButton}>
            Заказать
          </button>
        </div>
      </form>
    </div>
  );
};