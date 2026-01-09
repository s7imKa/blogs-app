import React, { useState } from 'react'
import type { Blog } from '../../../context/blogs/type'
import { Button } from '../../ui/Button/Button'
import { BlogCard } from '../BlogCard/BlogCard'
import style from './bloglist.module.scss'

type BlogListProps = {
    blogs: Blog[]
}

export const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
    const [sortBlogs, setSortBlogs] = useState<Blog[]>(blogs)
    const [searchTerm, setSearchTerm] = useState('')

    // Фільтруємо за введеним текстом
    const filteredBlogs = sortBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (blogs.length === 0) {
        return (
            <div>
                <p>Блогів поки немає. Створіть перший блог!</p>
            </div>
        )
    }

    // Сортування за переглядами
    const sortedViewAsc = () => {
        setSortBlogs(prev => [...prev].sort((a, b) => a.views - b.views))
    }
    const sortedViewDesc = () => {
        setSortBlogs(prev => [...prev].sort((a, b) => b.views - a.views))
    }

    // Сортування за датою
    const sortedDateAsc = () => {
        setSortBlogs(prev =>
            [...prev].sort(
                (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
            ),
        )
    }
    const sortedDateDesc = () => {
        setSortBlogs(prev =>
            [...prev].sort(
                (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
            ),
        )
    }

    return (
        <>
            <div
                style={{
                    paddingTop: '10px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    flexWrap: 'wrap',
                    marginBottom: '1rem',
                }}
            >
                {/* Поле пошуку */}
                <input
                    type='text'
                    placeholder='Пошук за назвою...'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #ccc',
                        minWidth: '200px',
                    }}
                />
                <Button onClick={sortedViewAsc}>Більше Переглядів</Button>
                <Button onClick={sortedViewDesc}>Менше Переглядів</Button>
                <Button onClick={sortedDateAsc}>Старіші</Button>
                <Button onClick={sortedDateDesc}>Новіші</Button>
            </div>
            <div className={style.container}>
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
                ) : (
                    <p>Блоги не знайдені</p>
                )}
            </div>
        </>
    )
}
