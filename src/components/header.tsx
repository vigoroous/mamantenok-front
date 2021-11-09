import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { VK, Instagram } from '@icons/socials'
import styles from '@styles/header.module.css'
import styles_mobile from '@styles/header_mobile.module.css'

export type HeaderProps = {
    selected?: 'gallery' | 'team' | 'achievements' | 'courses' | 'classes' | 'blog' | 'contacts'
}

const DesktopHeader: FC<HeaderProps> = ({ selected }) => {
    return (
        <header className={`${styles['header']}`}>
            <div className={`${styles['header__wrap']}`}>
                <div className={`${styles['header__logo']}`}>
                    <Link href="/" passHref><a className={`${styles['header__logo-link']}`}></a></Link>
                </div>
                <nav className={`${styles['header__nav']}`}>
                    <Link href="/gallery" passHref><a className={`${styles['header__nav-link']} ${selected === 'gallery' && styles['header__nav-link_active']}`}>Галерея</a></Link>
                    <Link href="/team" passHref><a className={`${styles['header__nav-link']} ${selected === 'team' && styles['header__nav-link_active']}`}>Наша&nbsp;команда</a></Link>
                    <Link href="/achievements" passHref><a className={`${styles['header__nav-link']} ${selected === 'achievements' && styles['header__nav-link_active']}`}>Достижения</a></Link>

                    <Link href="/courses" passHref><a className={`${styles['header__nav-link']} ${selected === 'courses' && styles['header__nav-link_active']}`}>Видеокурсы</a></Link>
                    <Link href="/classes" passHref><a className={`${styles['header__nav-link']} ${selected === 'classes' && styles['header__nav-link_active']}`}>Очные&nbsp;занятия</a></Link>
                    <Link href="/blog" passHref><a className={`${styles['header__nav-link']} ${selected === 'blog' && styles['header__nav-link_active']}`}>Блог</a></Link>
                    <Link href="/contacts" passHref><a className={`${styles['header__nav-link']} ${selected === 'contacts' && styles['header__nav-link_active']}`}>Контакты</a></Link>
                </nav>
                <div className="header__socials">
                    <Link href="https://vk.com/public197709930" passHref><a className="header__socials-item"><VK /></a></Link>
                    <Link href="https://www.instagram.com/sk_mamantenok/" passHref><a className="header__socials-item"><Instagram /></a></Link>
                </div>
            </div>
        </header>
    )
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