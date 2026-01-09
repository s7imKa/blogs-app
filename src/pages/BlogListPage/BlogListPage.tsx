import React from 'react'
import { ProtectedLayout } from '../../components/layout/ProtectedLayout'
import { useAuth } from '../../context/auth/useAuth'
import { useBlog } from '../../context/blogs/useBlog'
import { BlogList } from '../../components/blog/Bloglist/Bloglist'

interface BlogListPageProps {
    isMyBlogsPage?: boolean
}

export const BlogListPage: React.FC<BlogListPageProps> = ({ isMyBlogsPage = false }) => {
    const { blogs } = useBlog()
    const { currentUser } = useAuth()

    const filteredBlogs = isMyBlogsPage
        ? blogs.filter(blog => blog.authorEmail === currentUser?.email)
        : blogs

    return (
        <ProtectedLayout>
            <BlogList blogs={filteredBlogs} />
        </ProtectedLayout>
    )
}
