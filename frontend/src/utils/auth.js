export function getAuth(){
    const token = localStorage.getItem('token')
    return token
}


export function tokenLoader(){
    return getAuth()
}