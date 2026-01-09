import React from 'react'
import type { Blog } from '../../../context/blogs/type'
import { BlogCard } from '../BlogCard/BlogCard'
import style from './bloglist.module.scss'
type BlogListProps = {
    blogs: Blog[]
}

export const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
    if (blogs.length === 0) {
        return (
            <div>
                <p>Блогів поки немає. Створіть перший блог!</p>
            </div>
        )
    }

    return (
        <div className={style.container}>
            {blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    )
}
