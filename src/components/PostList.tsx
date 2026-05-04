import { useState, useEffect } from "react";

type Post = {
    id: number;
    title: string;
    body: string;
}

//Pick
type PostPreview = Pick<Post, 'id' | 'title'>
//Omit
type PostDraft = Omit<Post, 'id'>
//Partial
type PartialPost = Partial<Post>

const preview: Post = {id: 123, title: 'title', body: 'body'}
const result: PostPreview = preview;
console.log(result)
const draft: Post = {id: 123, title: 'title', body: 'body'}
const result2: PostDraft = draft;
console.log(result2)
const partial: Post = {id: 123, title: 'title', body: 'body'}
const result3: PartialPost = partial;
console.log(result3)

export default function PostList() {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    //custom generic
    function getLastItem<T>(arr: T[]): T {
        return arr[arr.length - 1];
    }

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
                console.log(getLastItem(data))
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