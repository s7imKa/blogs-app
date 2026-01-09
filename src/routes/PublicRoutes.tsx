import { Navigate } from 'react-router'
import { useAuth } from '../context/auth/useAuth'

type PublicRouteProps = {
    children: React.ReactNode
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const { currentUser } = useAuth()
    if (currentUser) {
        return <Navigate to='/blogs' />
    }
    return <>{children}</>
}
