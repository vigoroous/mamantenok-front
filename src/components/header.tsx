import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import useDelayedToggle from 'hooks/useDelayedToggle'
import { VK, Instagram } from '@icons/socials'
import styles from '@styles/header.module.css'
import styles_mobile from '@styles/header_mobile.module.css'


const DesktopHeader: FC<HeaderProps> = ({ selected }) => {

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

                    <SubmenuComponent selected={selected} />

                    <NavButton selected={selected} link='/blog'>Блог</NavButton>
                    <NavButton selected={selected} link='/contacts'>Контакты</NavButton>
                </nav>
                <div className={`${styles['header__socials']}`}>
                    <Link href="https://vk.com/public197709930" passHref><a className={`${styles['header__socials-link']}`}><VK /></a></Link>
                    <Link href="https://www.instagram.com/sk_mamantenok/" passHref><a className={`${styles['header__socials-link']}`}><Instagram /></a></Link>
                </div>
                <div className={`${styles['header__login-button']}`}>
                    <Link href="/login" passHref><a className={`${styles['header__login-button-link']}`}>Войти</a></Link>
                </div>
            </div>
        </header>
    )
}

const SubmenuComponent: FC<SubmenuProps & HeaderProps> = ({ mobile, selected }) => {
    const [submenu, setSubmenu] = useState(false)
    return (
        <Submenu mobile={!!mobile}>
            <SubmenuButton mobile={!!mobile} selected={selected} onClick={() => setSubmenu(!submenu)}>Курсы</SubmenuButton>
            <SubmenuItems mobile={!!mobile} open={submenu}>
                <NavButton mobile={!!mobile} selected={selected} link='/courses/video'>Видеокурсы</NavButton>
                <NavButton mobile={!!mobile} selected={selected} link='/courses/classes'>Очные&nbsp;занятия</NavButton>
            </SubmenuItems>
        </Submenu>
    )
}

type SubmenuProps = {
    mobile?: boolean,
}

const Submenu: FC<SubmenuProps> = ({ mobile, children }) => {
    return (
        <div className={`${mobile ? styles_mobile['header__submenu'] : styles['header__submenu']}`}>
            {children}
        </div>
    )
}

type SubmenuButtonProps = {
    mobile?: boolean,
    onClick: () => void,
} & HeaderProps

const SubmenuButton: FC<SubmenuButtonProps> = ({ selected, mobile, onClick, children }) => {
    const included = selected === 'courses'

    return (
        <div className={`
            ${mobile ? styles_mobile['header__submenu-button'] : styles['header__submenu-button']}
            ${included && (mobile ? styles_mobile['header__submenu-button_active'] : styles['header__submenu-button_active'])}`}
            onClick={onClick}
        >
            {children}
            <div className={`${mobile ? styles_mobile['header__submenu-button-arrow'] : styles['header__submenu-button-arrow']}`}></div>
        </div>
    )
}

type SubmenuItemsProps = {
    mobile?: boolean,
    open: boolean,
    delay?: number,
}

const SubmenuItems: FC<SubmenuItemsProps> = ({ mobile, open, delay = 200, children }) => {
    const timer = useRef<number | undefined>(undefined)
    const [actuallyOpen] = useDelayedToggle(open, delay)

    if (!actuallyOpen) return null
    return (
        <div className={`
            ${mobile ? styles_mobile['header__submenu-items'] : styles['header__submenu-items']}
            ${open ? styles['header__submenu-items_opened'] : styles['header__submenu-items_closed']}`}
        >
            {children}
        </div>
    )
}

type NavButtonProps = {
    mobile?: boolean,
    link: string,
} & HeaderProps

const NavButton: FC<NavButtonProps> = ({ selected, mobile, link, children }) => {
    const included = selected && link.includes(selected)

    return (
        <Link href={link} passHref>
            <a className={`
                ${mobile ? styles_mobile['header__nav-link'] : styles['header__nav-link']}  
                ${included && (mobile ? styles_mobile['header__nav-link_active'] : styles['header__nav-link_active'])}`}
            >
                {children}
            </a>
        </Link>
    )
}

const MobileHeader: FC<HeaderProps> = ({ selected }) => {
    const [drawer, setDrawer] = useState(false)
    const toggleDrawer = () => setDrawer(!drawer)

    useEffect(() => setDrawer(false), [selected])

    return (
        <header className={`${styles_mobile['header']}`}>
            <div className={`${styles_mobile['header__wrap']}`}>
                <div className={`${styles_mobile['header__burger']}`}>
                    <div className={`${styles_mobile['header__burger-button']} ${drawer && styles_mobile['header__burger-button_active']}`}
                        onClick={toggleDrawer}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`${styles_mobile['header__logo']}`}>
                    <Link href="/" passHref><a className={`${styles_mobile['header__logo-link']}`}></a></Link>
                </div>
            </div>
            <MobileDrawer selected={selected} open={drawer} onClose={() => setDrawer(false)} />
        </header>
    )
}

type MobileDrawerProps = {
    open: boolean,
    delay?: number,
    onClose: () => void,
} & HeaderProps

const MobileDrawer: FC<MobileDrawerProps> = ({ selected, open, delay = 300, onClose }) => {
    const [actuallyOpen] = useDelayedToggle(open, delay)

    if (!actuallyOpen) return null
    return (
        <div className={`${styles_mobile['header__drawer-wrap']} ${open ? styles_mobile['header__drawer-wrap_opened'] : styles_mobile['header__drawer-wrap_closed']}`}
            onClick={() => onClose()}>
            <div className={`${styles_mobile['header__drawer']} ${open ? styles_mobile['header__drawer_opened'] : styles_mobile['header__drawer_closed']}`}
                onClick={e => e.stopPropagation()}>
                <nav className={`${styles_mobile['header__nav']}`}>
                    <NavButton mobile selected={selected} link='/gallery'>Галерея</NavButton>
                    <NavButton mobile selected={selected} link='/team'>Наша&nbsp;команда</NavButton>
                    <NavButton mobile selected={selected} link='/achievements'>Достижения</NavButton>

                    <SubmenuComponent mobile />

                    <NavButton mobile selected={selected} link='/blog'>Блог</NavButton>
                    <NavButton mobile selected={selected} link='/contacts'>Контакты</NavButton>
                </nav>
                <div className={`${styles_mobile['header__socials']}`}>
                    <Link href="https://vk.com/public197709930" passHref><a className={`${styles_mobile['header__socials-link']}`}><VK /></a></Link>
                    <Link href="https://www.instagram.com/sk_mamantenok/" passHref><a className={`${styles_mobile['header__socials-link']}`}><Instagram /></a></Link>
                </div>
                <div className={`${styles_mobile['header__login-button']}`}>
                    <Link href="/login" passHref><a className={`${styles_mobile['header__login-button-link']}`}>Войти</a></Link>
                </div>
            </div>
        </div>
    )
}

export type HeaderProps = {
    selected?: 'home' | 'gallery' | 'team' | 'achievements' | 'courses' | 'classes' | 'blog' | 'contacts' | 'login'
}

const Header: FC<HeaderProps> = ({ selected }) => {

    return (
        <>
            <DesktopHeader selected={selected} />
            <MobileHeader selected={selected} />
        </>
    )
}

export default Header