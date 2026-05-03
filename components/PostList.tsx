import { useState, useEffect } from "react";

type Post = {
    id: number;
    title: string;
    body: string;
}

export default function PostList() {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    

    useEffect(() => {

        setLoading(true);
        setError(null);
        const controller = new AbortController();

        (async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {signal: controller.signal})
                if (!response.ok) throw new Error('Error')
                const data: Post[] = await response.json()
                setPosts(data)
            }
            catch (error) {
                if (error instanceof Error && error.name !== 'AbortError') {
                    setError(error.message);
                }
            }
            finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        })()

        return () => controller.abort();
    }, [])

    return (
        <>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {posts.map((post) => <p key={post.id}>{post.title}<br/>{post.body}</p>)}
        </>
    )
}