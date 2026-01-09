import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router'
import { BlogCreatePage } from '../pages/BlogCreatePage'
import { BlogDetailsPage } from '../pages/BlogDetailsPage'
import { BlogEditPage } from '../pages/BlogEditPage'
import { BlogListPage } from '../pages/BlogListPage'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { PrivateRoute } from '../routes/PrivateRoutes'
import { PublicRoute } from '../routes/PublicRoutes'

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to='/login' replace />} />
                <Route
                    path='/login'
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />
                <Route
                    path='/register'
                    element={
                        <PublicRoute>
                            <RegisterPage />
                        </PublicRoute>
                    }
                />
                <Route
                    path='/blogs'
                    element={
                        <PrivateRoute>
                            <BlogListPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/blogs/:id'
                    element={
                        <PrivateRoute>
                            <BlogDetailsPage />
                        </PrivateRoute>
                    }
                />{' '}
                <Route
                    path='/my-blogs'
                    element={
                        <PrivateRoute>
                            <BlogListPage isMyBlogsPage={true} />
                        </PrivateRoute>
                    }
                />{' '}
                <Route
                    path='/my-blogs:id'
                    element={
                        <PrivateRoute>
                            <BlogDetailsPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/create'
                    element={
                        <PrivateRoute>
                            <BlogCreatePage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/edit/:id'
                    element={
                        <PrivateRoute>
                            <BlogEditPage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
