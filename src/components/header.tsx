import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { VK, Instagram } from '@icons/socials'
import styles from '@styles/header.module.css'
import styles_mobile from '@styles/header_mobile.module.css'


const DesktopHeader: FC<HeaderProps> = ({ selected }) => {
    const [submenu, setSubmenu] = useState(false)

    return (
        <header className={`${styles['header']}`}>
            <div className={`${styles['header__wrap']}`}>
                <div className={`${styles['header__logo']}`}>
                    <Link href="/" passHref><a className={`${styles['header__logo-link']}`}></a></Link>
                </div>
                <nav className={`${styles['header__nav']}`}>
                    <NavButton selected={selected} link='/gallery'>Галерея</NavButton>
                    <NavButton selected={selected} link='/team'>Наша&nbsp;команда</NavButton>
                    <NavButton selected={selected} link='/achievements'>Достижения</NavButton>

                    <Submenu>
                        <SubmenuButton selected={selected} onClick={() => setSubmenu(!submenu)}>Курсы</SubmenuButton>
                        <SubmenuItems open={submenu}>
                            <NavButton selected={selected} link='/courses/video'>Видеокурсы</NavButton>
                            <NavButton selected={selected} link='/courses/classes'>Очные&nbsp;занятия</NavButton>
                        </SubmenuItems>
                    </Submenu>

                    <NavButton selected={selected} link='/blog'>Блог</NavButton>
                    <NavButton selected={selected} link='/contacts'>Контакты</NavButton>
                </nav>
                <div className={`${styles['header__socials']}`}>
                    <Link href="https://vk.com/public197709930" passHref><a className={`${styles['header__socials-link']}`}><VK /></a></Link>
                    <Link href="https://www.instagram.com/sk_mamantenok/" passHref><a className={`${styles['header__socials-link']}`}><Instagram /></a></Link>
                </div>
                <div className={`${styles['header__login-button']}`}>
                    <a className={`${styles['header__login-button-link']}`} href="#">Войти</a>
                </div>
            </div>
        </header>
    )
}

const Submenu: FC = ({ children }) => {
    return (
        <div className={`${styles['header__submenu']}`}>
            {children}
        </div>
    )
}

type SubmenuButtonProps = {
    onClick: () => void
} & HeaderProps

const SubmenuButton: FC<SubmenuButtonProps> = ({ selected, onClick, children }) => {
    const included = selected === 'courses'

    return (
        <div className={`
            ${styles['header__submenu-button']}
            ${included && styles['header__submenu-button_active']}`}
            onClick={onClick}
        >
            {children}
            <div className={`${styles['header__submenu-button-arrow']}`}></div>
        </div>
    )
}

type SubmenuProps = {
    open: boolean,
    delay?: number,
}

const SubmenuItems: FC<SubmenuProps> = ({ open, delay = 200, children }) => {
    const timer = useRef<number | undefined>(undefined)
    const [actuallyOpen, setActuallyOpen] = useState(false)

    useEffect(() => {
        if (timer.current) window.clearTimeout(timer.current)
        if (open) {
            setActuallyOpen(true)
        } else {
            timer.current = window.setTimeout(() => setActuallyOpen(false), delay)
            return () => window.clearTimeout(timer.current)
        }
    }, [open, delay])

    if (!actuallyOpen) return null
    return (
        <div className={`
            ${styles['header__submenu-items']}
            ${open ? styles['header__submenu-items_opened'] : styles['header__submenu-items_closed']}`}
        >
            {children}
        </div>
    )
}

type NavButtonProps = {
    link: string,
} & HeaderProps

const NavButton: FC<NavButtonProps> = ({ selected, link, children }) => {
    const included = link.includes(selected)

    return (
        <Link href={link} passHref>
            <a className={`
                ${styles['header__nav-link']} 
                ${included && styles['header__nav-link_active']}`}
            >
                {children}
            </a>
        </Link>
    )
}

export type HeaderProps = {
    selected: 'home' | 'gallery' | 'team' | 'achievements' | 'courses' | 'classes' | 'blog' | 'contacts'
}

const Header: FC<HeaderProps> = ({ selected }) => {

    return (
        <>
            <DesktopHeader selected={selected} />
            {/* <MobileHeader selected={selected} /> */}
        </>
    )
}

export default Header