import React from 'react'
import { useNavigate } from 'react-router'
import type { Blog } from '../../../context/blogs/type'
import './blogCard.module.scss'

type BlogCardProps = {
    blog: Blog
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    const navigate = useNavigate()

    const handleViewDetails = () => {
        navigate(`/blogs/${blog.id}`)
    }

    return (
        <div onClick={handleViewDetails}>
            <h3>{blog.title}</h3>
            <p>
                {blog.content.substring(0, 150)}
                {blog.content.length > 150 ? '...' : ''}
            </p>
            <div>
                <div>
                    <div>Автор: {blog.authorEmail}</div>
                    <div>Переглядів: {blog.views}</div>
                    <div>Створено: {new Date(blog.createdAt).toLocaleDateString('uk-UA')}</div>
                </div>
            </div>
        </div>
    )
}
