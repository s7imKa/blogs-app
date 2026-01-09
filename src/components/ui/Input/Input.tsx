import React from 'react'
import styles from './Input.module.scss'

type InputProps = {
    type?: string
    placeholder?: string
    value: string
    onChange: (value: string) => void
    label?: string
    required?: boolean
}

export const Input: React.FC<InputProps> = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    label,
    required = false,
}) => {
    return (
        <div className={styles.inputGroup}>
            {label && (
                <label className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                required={required}
            />
        </div>
    )
}
