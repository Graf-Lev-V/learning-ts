import useFetch from '../hooks/useFetch'

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

    const posts = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')

    return (
        <>
            {posts.error && <p>{posts.error}</p>}
            {posts.loading && <p>Loading...</p>}
            {posts.data && posts.data.map((post) => <p key={post.id}>{post.title}<br/>{post.body}</p>)}
        </>
    )
}