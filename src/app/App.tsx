import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router'

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to='/login' replace />} />
                <Route
                    path='/login'
                    element={
                            <LoginPage />
                    }
                />
                <Route
                    path='/register'
                    element={
                            <RegisterPage />
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
