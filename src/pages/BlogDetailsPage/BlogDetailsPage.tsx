import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ProtectedLayout } from '../../components/layout/ProtectedLayout'
import { Button } from '../../components/ui/Button/Button'
import { useAuth } from '../../context/auth/useAuth'
import { useBlog } from '../../context/blogs/useBlog'
import styles from './BlogDetailsPage.module.scss'

export const BlogDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { blogs, deleteBlog, incrementViews } = useBlog()
    const { currentUser } = useAuth()
    const navigate = useNavigate()

    const blog = blogs.find(b => b.id === id)

    useEffect(() => {
        if (!id) return

        const key = `viewed-blog-${id}`
        if (sessionStorage.getItem(key)) return

        incrementViews(id)
        sessionStorage.setItem(key, 'true')
    }, [id, incrementViews])

    if (!blog) {
        return (
            <ProtectedLayout>
                <div>
                    <h2>Блог не знайдено</h2>
                    <Button onClick={() => navigate('/blogs')}>Повернутись до списку</Button>
                </div>
            </ProtectedLayout>
        )
    }

    const handleEdit = () => {
        navigate(`/edit/${blog.id}`)
    }

    const handleDelete = () => {
        if (window.confirm('Ви впевнені, що хочете видалити цей блог?')) {
            deleteBlog(blog.id)
            navigate('/blogs')
        }
    }

    const isAuthor = currentUser?.email === blog.authorEmail
    return (
        <ProtectedLayout>
            <div className={styles.container}>
                <h1 className={styles.title}>{blog.title}</h1>
                <div className={styles.meta}>
                    <div>Автор: {blog.authorEmail}</div>
                    <div>Переглядів: {blog.views}</div>
                    <div>Створено: {new Date(blog.createdAt).toLocaleDateString('uk-UA')}</div>
                </div>
                <div className={styles.content}>{blog.content}</div>
                <div className={styles.actions}>
                    <Button onClick={() => navigate('/blogs')} variant='secondary'>
                        Назад до списку
                    </Button>
                    {isAuthor && (
                        <>
                            <Button onClick={handleEdit}>Редагувати</Button>
                            <Button onClick={handleDelete} variant='danger'>
                                Видалити
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </ProtectedLayout>
    )
}
