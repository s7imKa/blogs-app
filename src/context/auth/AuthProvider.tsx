import { useEffect, useState } from 'react'
import {
    clearLocalStorage,
    clearSessionStorage,
    getFromLocalStorage,
    getFromSessionStorage,
    saveToLocalStorage,
    saveToSessionStorage,
} from '../../utils/storage'
import { AuthContext } from './AuthContext'
import type { User } from './type'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<{ email: string } | null>(() => {
        return getFromSessionStorage('currentUser')
    })

    useEffect(() => {
        if (currentUser) {
            saveToLocalStorage('currentUser', currentUser)
        } else {
            clearLocalStorage('currentUser')
        }
    }, [currentUser])

    const login = (email: string, password: string): boolean => {
        const users: User[] = getFromLocalStorage('users') || []
        const user = users ? users.find(u => u.email === email && u.password === password) : null

        if (user) {
            const userData = { email: user.email }
            setCurrentUser(userData)
            saveToSessionStorage('currentUser', userData)
            return true
        }
        return false
    }

    const register = (email: string, password: string): boolean => {
        const users: User[] = getFromLocalStorage('users') || []

        if (users.find(u => u.email === email)) {
            return false
        }

        users.push({ email, password })
        saveToLocalStorage('users', users)
        return true
    }

    const logout = () => {
        setCurrentUser(null)
        clearSessionStorage('currentUser')
    }

    return (
        <AuthContext.Provider value={{ currentUser, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
