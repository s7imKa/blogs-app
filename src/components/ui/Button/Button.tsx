import React from 'react'
import './button.module.scss'


type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'danger'
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    disabled = false,
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'secondary':
                return {
                    backgroundColor: '#6c757d',
                    color: 'white',
                }
            case 'danger':
                return {
                    backgroundColor: '#dc3545',
                    color: 'white',
                }
            default:
                return {
                    backgroundColor: '#646cff',
                    color: 'white',
                }
        }
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{
                ...getVariantStyles(),
            }}
        >
            {children}
        </button>
    )
}
