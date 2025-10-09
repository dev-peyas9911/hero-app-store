
export const loadApplist = () => {
    try {
        const data = localStorage.getItem('applist')
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err)
        return []
    }
}


export const updateAppList = product => {
    const applist = loadApplist()

    try {
        const isDuplicate = applist.some(p => p.id === product.id)
        if (isDuplicate) return alert('Already added in applist')
        const updatedApplist = [...applist, product]
        localStorage.setItem('applist', JSON.stringify(updatedApplist))
    } catch (err) {
        console.log(err)
    }
}


export const removeFromApplist = id => {
    const applist = loadApplist()
    try {
        const updatedApplist = applist.filter(p => p.id !== id)
        localStorage.setItem('applist', JSON.stringify(updatedApplist))
    } catch (err) {
        console.log(err)
    }
}