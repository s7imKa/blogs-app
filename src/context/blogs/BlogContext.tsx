import { createContext } from 'react'
import type { Blog } from './type'

export type BlogContextType = {
    blogs: Blog[]
    createBlog: (title: string, content: string) => void
    updateBlog: (id: string, title: string, content: string) => void
    deleteBlog: (id: string) => void
    incrementViews: (id: string) => void
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined)
