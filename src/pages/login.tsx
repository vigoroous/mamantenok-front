import { NextPageWithLayout } from './_app'
import Layout from '@components/layout'
import styles from '@styles/login.module.css'


const Login: NextPageWithLayout = () => {
    return (
        <main className={`${styles['content']}`}>
            <div className={`${styles['form-wrap']}`}>
                <form className={`${styles['form']}`}>
                    <label className={`${styles['form__title']}`}>Вход</label>
                    <input className={`${styles['form__input']}`} placeholder="Логин" name="login" />
                    <input className={`${styles['form__input']}`} placeholder="Пароль" name="password" />
                    <button className={`${styles['form__submit-button']}`} type="submit">Войти</button>
                </form>
            </div>
        </main>
    )
}

export default Login

Login.getLayout = function getLayout(page) {
    return (
        <Layout selected='login'>
            {page}
        </Layout>
    )
}
