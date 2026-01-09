import { useState, type FC } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import { useAuth } from '../../context/auth/useAuth'
import { validateEmail, validatePassword } from '../../utils/validators'
import styles from './RegisterPage.module.scss'


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
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Реєстрація</h2>
                {error && <div className={styles.error}>{error}</div>}
                <form className={styles.form} onSubmit={handleSubmit}>
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
                <p className={styles.footer}>
                    Вже є акаунт? <a href='/login'>Увійти</a>
                </p>
            </div>
        </div>
    )
}
