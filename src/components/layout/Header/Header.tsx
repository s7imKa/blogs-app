import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../../context/auth/useAuth'
import { Button } from '../../ui/Button/Button'
import styles from './Header.module.scss'

export const Header: React.FC = () => {
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    const handleCreateBlog = () => {
        navigate('/create')
    }
    const handleMyBlog = () => {
        navigate('/my-blogs')
    }

    const handleGoHome = () => {
        navigate('/blogs')
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.title} onClick={handleGoHome}>
                Blogs App
            </h1>
            <div className={styles.userSection}>
                {currentUser && (
                    <>
                        <span className={styles.userEmail}>{currentUser.email}</span>
                        <div className={styles.buttonGroup}>
                            <Button onClick={handleGoHome} variant='secondary'>
                                Головна сторінка
                            </Button>
                            <Button onClick={handleCreateBlog} variant='secondary'>
                                Створити блог
                            </Button>
                            <Button onClick={handleMyBlog} variant='secondary'>
                                Мої блоги
                            </Button>

                            <Button onClick={handleLogout} variant='danger'>
                                Вийти
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </header>
    )
}
