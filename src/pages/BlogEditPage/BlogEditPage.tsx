import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { BlogForm } from '../../components/blog/BlogForm/BlogForm'
import { ProtectedLayout } from '../../components/layout/ProtectedLayout'
import { useAuth } from '../../context/auth/useAuth'
import { useBlog } from '../../context/blogs/useBlog'
import styles from './blogEditPage.module.scss'

export const BlogEditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { blogs, updateBlog } = useBlog()
    const { currentUser } = useAuth()
    const navigate = useNavigate()

    const blog = blogs.find(b => b.id === id)

    if (!blog) {
        return (
            <ProtectedLayout>
                <div>
                    <h2>Блог не знайдено</h2>
                </div>
            </ProtectedLayout>
        )
    }

    if (currentUser?.email !== blog.authorEmail) {
        return (
            <ProtectedLayout>
                <div>
                    <h2>У вас немає прав для редагування цього блогу</h2>
                </div>
            </ProtectedLayout>
        )
    }

    const handleSubmit = (title: string, content: string) => {
        if (id) {
            updateBlog(id, title, content)
            navigate(`/blogs/${id}`)
        }
    }

    return (
        <ProtectedLayout>
            <div className='container'>
                <h2 className={styles.title}>Редагувати блог</h2>
                <BlogForm
                    initialTitle={blog.title}
                    initialContent={blog.content}
                    onSubmit={handleSubmit}
                    submitLabel='Зберегти зміни'
                />
            </div>
        </ProtectedLayout>
    )
}
