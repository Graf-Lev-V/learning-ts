import useFetch from "../hooks/useFetch";

type User = {
    id: number;
    name: string;
    email: string;
}

export default function UserList() {

    const users = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

    return (
        <>
            {users.error && <p>{users.error}</p>}
            {users.loading && <p>Loading...</p>}
            {users.data && users.data.map((user) => <p key={user.id}>{user.name}<br/>{user.email}</p>)}
        </>
    )
}