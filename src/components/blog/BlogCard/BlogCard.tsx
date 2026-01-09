import React from 'react'
import { useNavigate } from 'react-router'
import type { Blog } from '../../../context/blogs/type'
import styles from './BlogCard.module.scss'

type BlogCardProps = {
    blog: Blog
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    const navigate = useNavigate()

    const handleViewDetails = () => {
        navigate(`/blogs/${blog.id}`)
    }

    return (
        <div className={styles.card} onClick={handleViewDetails}>
            <h3 className={styles.title}>{blog.title}</h3>
            <p className={styles.preview}>
                {blog.content.substring(0, 150)}
                {blog.content.length > 150 ? '...' : ''}
            </p>
            <div className={styles.meta}>
                <div className={styles.metaItem}>Автор: {blog.authorEmail}</div>
                <div className={styles.metaItem}>Переглядів: {blog.views}</div>
                <div className={styles.metaItem}>
                    Створено: {new Date(blog.createdAt).toLocaleDateString('uk-UA')}
                </div>
            </div>
        </div>
    )
}
