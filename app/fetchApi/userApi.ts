export const fetchUserData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    await new Promise((resolved) => setTimeout(resolved, 1000))
    const data = await res.json()
    return data;
}

export const fetchUserPosts = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 60 } })
    const data = await res.json()
    return data;
}
export const fetchPostComments = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    await new Promise((resolved) => setTimeout(resolved, 3000))
    const data = await res.json()
    return data;
}