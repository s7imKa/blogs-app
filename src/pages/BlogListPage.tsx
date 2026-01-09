import React from 'react'
import { ProtectedLayout } from '../components/layout/ProtectedLayout'
import { BlogList } from '../components/blog/Bloglist'
import { useBlog } from '../context/blogs/useBlog'

export const BlogListPage: React.FC = () => {
    const { blogs } = useBlog()

    return (
        <ProtectedLayout>
            <BlogList blogs={blogs} />
        </ProtectedLayout>
    )
}


