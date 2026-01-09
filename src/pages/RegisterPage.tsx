import { useState, type FC } from 'react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { useAuth } from '../context/auth/useAuth'
import { useNavigate } from 'react-router'
import { validateEmail, validatePassword } from '../utils/validators'

export const RegisterPage: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const { register } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (!validateEmail(email)) {
            setError('Невірний формат email')
            return
        }

        if (!validatePassword(password)) {
            setError('Пароль повинен містити мінімум 6 символів')
            return
        }

        if (password !== confirmPassword) {
            setError('Паролі не співпадають')
            return
        }

        const success = register(email, password)
        if (success) {
            navigate('/login')
        } else {
            setError('Користувач з таким email вже існує')
        }
    }

    return (
        <div>
            <div>
                <h2>Реєстрація</h2>
                {error && <h2>{error}</h2>}
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
                        placeholder='Мінімум 6 символів'
                        required
                    />
                    <Input
                        type='password'
                        label='Підтвердження паролю'
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                        placeholder='Повторіть пароль'
                        required
                    />
                    <Button type='submit'>Зареєструватись</Button>
                </form>
                <p>
                    Вже є акаунт? <a href='/login'>Увійти</a>
                </p>
            </div>
        </div>
    )
}
