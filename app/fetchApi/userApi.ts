export const fetchUserData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    await new Promise((resolved) => setTimeout(resolved, 1000))
    const data = await res.json()
    return data;
}

export const fetchUserPosts = async (uid: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${uid}`)
    await new Promise((resolved) => setTimeout(resolved, 1000))
    const data = await res.json()
    return data;
}
export const fetchPostComments = async (uid: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${uid}/comments`)
    await new Promise((resolved) => setTimeout(resolved, 1000))
    const data = await res.json()
    return data;
}