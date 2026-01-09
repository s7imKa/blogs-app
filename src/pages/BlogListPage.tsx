import React from 'react'
import { ProtectedLayout } from '../components/layout/ProtectedLayout'
import { BlogList } from '../components/blog/Bloglist'
import { useBlog } from '../context/blogs/useBlog'

export const BlogListPage: React.FC = () => {
    const { blogs } = useBlog()

    return (
        <ProtectedLayout>
            <h2>Всі блоги</h2>
            <BlogList blogs={blogs} />
        </ProtectedLayout>
    )
}


