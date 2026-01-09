import React, { useState } from 'react'
import { Button } from '../../ui/Button/Button'
import { Input } from '../../ui/Input/Input'
import './blogForm.module.scss'

type BlogFormProps = {
    initialTitle?: string
    initialContent?: string
    onSubmit: (title: string, content: string) => void
    submitLabel?: string
}

export const BlogForm: React.FC<BlogFormProps> = ({
    initialTitle = '',
    initialContent = '',
    onSubmit,
    submitLabel = 'Створити',
}) => {
    const [title, setTitle] = useState(initialTitle)
    const [content, setContent] = useState(initialContent)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (title.trim() && content.trim()) {
            onSubmit(title, content)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label='Назва блогу'
                value={title}
                onChange={setTitle}
                placeholder='Введіть назву блогу'
                required
            />
            <div>
                <label>
                    Зміст блогу<span>*</span>
                </label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder='Введіть зміст блогу'
                    required
                    rows={10}
                />
            </div>
            <Button type='submit'>{submitLabel}</Button>
        </form>
    )
}
