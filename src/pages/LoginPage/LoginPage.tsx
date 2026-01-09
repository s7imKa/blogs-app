import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import { useAuth } from '../../context/auth/useAuth'
import { validateEmail } from '../../utils/validators'
import './loginPage.module.scss'
export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (!validateEmail(email)) {
            setError('Невірний формат email')
            return
        }

        const success = login(email, password)
        if (success) {
            navigate('/blogs')
        } else {
            setError('Невірний email або пароль')
        }
    }

    return (
        <div>
            <div>
                <h2>Вхід</h2>
                {error && <div>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <Input
                        type='email'
                        label='Email'
                        value={email}
                        onChange={setEmail}
                        placeholder='example@email.com'
                        required
                    />
                    <Input
                        type='password'
                        label='Пароль'
                        value={password}
                        onChange={setPassword}
                        placeholder='Введіть пароль'
                        required
                    />
                    <Button type='submit'>Увійти</Button>
                </form>
                <p>
                    Немає акаунту? <a href='/register'>Зареєструватись</a>
                </p>
            </div>
        </div>
    )
}
