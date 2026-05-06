import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

type Post = {
    id: number;
    title: string;
    body: string;
}

export default function PostDetail() {

    const { id } = useParams();
    const post = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return (
        <>
            {post.error && <p>{post.error}</p>}
            {post.loading && <p>Loading...</p>}
            {post.data && <p>{post.data.title}<br/>{post.data.body}</p>}
        </>
    )
}