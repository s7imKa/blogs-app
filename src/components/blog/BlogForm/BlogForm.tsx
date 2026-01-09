import React, { useState } from 'react'
import { Button } from '../../ui/Button/Button'
import { Input } from '../../ui/Input/Input'
import styles from './BlogForm.module.scss'

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
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <Input
                    label='Назва блогу'
                    value={title}
                    onChange={setTitle}
                    placeholder='Введіть назву блогу'
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>
                    Зміст блогу
                    <span className={styles.required}>*</span>
                </label>
                <textarea
                    className={styles.textarea}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder='Введіть зміст блогу'
                    required
                    rows={10}
                />
            </div>
            <div className={styles.buttonGroup}>
                <Button type='submit'>{submitLabel}</Button>
            </div>
        </form>
    )
}
