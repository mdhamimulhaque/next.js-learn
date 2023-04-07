export const fetchUserData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    await new Promise((resolved) => setTimeout(resolved, 1000))
    const data = await res.json()
    return data;
}