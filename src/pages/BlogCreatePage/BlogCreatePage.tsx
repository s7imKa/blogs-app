import React from 'react'
import { useNavigate } from 'react-router'
import { BlogForm } from '../../components/blog/BlogForm/BlogForm'
import { ProtectedLayout } from '../../components/layout/ProtectedLayout'
import { useBlog } from '../../context/blogs/useBlog'
import styles from './blogCreatePage.module.scss'

export const BlogCreatePage: React.FC = () => {
    const { createBlog } = useBlog()
    const navigate = useNavigate()

    const handleSubmit = (title: string, content: string) => {
        createBlog(title, content)
        navigate('/blogs')
    }

    return (
        <ProtectedLayout>
            <div className={styles.container}>
                <h2 className={styles.title}>Створити новий блог</h2>
                <BlogForm onSubmit={handleSubmit} submitLabel='Створити блог' />
            </div>
        </ProtectedLayout>
    )
}
