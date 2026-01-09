import { createContext } from 'react'

export type AuthContextType = {
    currentUser: { email: string } | null
    login: (email: string, password: string) => boolean
    register: (email: string, password: string) => boolean
    logout: () => void
}
export const AuthContext = createContext<AuthContextType | null>(null)
