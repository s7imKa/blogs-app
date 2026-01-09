import React, { useCallback, useEffect, useState, type FC } from 'react'
import { v4 as newId } from 'uuid'
import { getFromLocalStorage, saveToLocalStorage } from '../../utils/storage'
import { useAuth } from '../auth/useAuth'
import { BlogContext } from './BlogContext'
import type { Blog } from './type'

interface BlogProviderProps {
    children: React.ReactNode
}
export const BlogProvider: FC<BlogProviderProps> = ({ children }) => {
    const [blogs, setBlogs] = useState<Blog[]>(() => {
        const stored = getFromLocalStorage('blogs') as Blog[] | null
        if (stored && stored.length > 0) return stored

        const now = new Date().toISOString()
        return [
            {
                id: newId(),
                title: 'Вітаємо у Blogs App',
                content: 'Це прикладовий пост. Натисніть, щоб переглянути деталі.',
                authorEmail: 'demo@blogs.app',
                createdAt: now,
                views: 0,
            },
            {
                id: newId(),
                title: 'Другий пост',
                content: 'Ще один приклад посту. Натисніть, щоб переглянути деталі.',
                authorEmail: 'demo@blogs.app',
                createdAt: now,
                views: 0,
            },
        ]
    })
    const { currentUser } = useAuth()

    useEffect(() => {
        saveToLocalStorage('blogs', blogs)
    }, [blogs])

    const createBlog = useCallback(
        (title: string, content: string) => {
            if (!currentUser) return

            const newBlog: Blog = {
                id: newId(),
                title: title,
                content: content,
                authorEmail: currentUser.email,
                createdAt: new Date().toISOString(),
                views: 0,
            }

            setBlogs(prevBlogs => [...prevBlogs, newBlog])
        },
        [currentUser],
    )

    const updateBlog = useCallback((id: string, title: string, content: string) => {
        setBlogs(prev => prev.map(blog => (blog.id === id ? { ...blog, title, content } : blog)))
    }, [])

    const deleteBlog = useCallback((id: string) => {
        setBlogs(prev => prev.filter(blog => blog.id !== id))
    }, [])

    const incrementViews = useCallback((id: string) => {
        setBlogs(prev =>
            prev.map(blog => (blog.id === id ? { ...blog, views: blog.views + 1 } : blog)),
        )
    }, [])

    return (
        <BlogContext.Provider value={{ blogs, createBlog, updateBlog, deleteBlog, incrementViews }}>
            {children}
        </BlogContext.Provider>
    )
}
