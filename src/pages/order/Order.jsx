import styles from '@shared/css/order/order.module.css';
import { Header } from '@widgets/header-footer/Header';
import { OrderForm } from '@features/order/ui/order-form/OrderForm';
import { SideBackground } from '@widgets/layout/SideBackground';
import { Footer } from '@widgets/header-footer/Footer';

export const OrderPage = (props) => {

    return <div className={styles.wrapper}>

        <div className={styles.sideBackgroundContainer}>
            <SideBackground isDark={false}/>
        </div>

        <div className={styles.main}>
            <Header/>
            <OrderForm/>
            <Footer/>
        </div>
        
    </div>
}