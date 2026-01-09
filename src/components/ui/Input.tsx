import React from 'react'

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
        <div>
            {label && (
                <label>
                    {label}
                    {required && <span>*</span>}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                required={required}
            />
        </div>
    )
}
