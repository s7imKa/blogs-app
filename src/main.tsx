import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { AuthProvider } from './context/auth/AuthProvider.tsx'
import { BlogProvider } from './context/blogs/BlogProvider.tsx'
import './styles/main.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <BlogProvider>
                <App />
            </BlogProvider>
        </AuthProvider>
    </StrictMode>,
)
