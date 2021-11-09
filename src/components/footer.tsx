import React, { FunctionComponent } from 'react'
import styles from "@styles/footer.module.css"


const Footer: FunctionComponent = () =>
    <footer className={styles.footer}>
        <div className={styles.footer__copyright}>&copy; Мамантёнок 2021</div>
    </footer>


export default Footer