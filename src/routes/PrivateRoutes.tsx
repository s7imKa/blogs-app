import { Navigate } from 'react-router'
import { useAuth } from '../context/auth/useAuth'

type PrivateRouteProps = {
    children: React.ReactNode
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { currentUser } = useAuth()
    if (!currentUser) {
        return <Navigate to='/login' />
    }
    return <>{children}</>
}
