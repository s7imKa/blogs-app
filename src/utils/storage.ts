export const saveToLocalStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getFromLocalStorage = (key: string) => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
}

export const clearLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}

export const saveToSessionStorage = (key: string, value: unknown) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}

export const getFromSessionStorage = (key: string) => {
    const item = sessionStorage.getItem(key)
    return item ? JSON.parse(item) : null
}

export const clearSessionStorage = (key: string) => {
    sessionStorage.removeItem(key)
}
