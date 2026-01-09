import React from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../ui/Button'
import { useAuth } from '../../context/auth/useAuth'

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
        <header>
            <h1 onClick={handleGoHome}>Blogs App</h1>
            <div>
                {currentUser && (
                    <>
                        <span>Привіт, {currentUser.email}</span>
                        <Button onClick={handleCreateBlog} variant='secondary'>
                            Створити блог
                        </Button>
                        <Button onClick={handleMyBlog} variant='secondary'>
                            Мої блоги
                        </Button>

                        <Button onClick={handleLogout} variant='danger'>
                            Вийти
                        </Button>
                    </>
                )}
            </div>
        </header>
    )
}
