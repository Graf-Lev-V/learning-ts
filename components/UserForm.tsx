import { useState } from "react"
import UserCard from "./UserCard"
import Button from './Button'

type User = {
    name: string,
    age?: number,
    id: string
}

export default function UserForm() {

    const [name, setName] = useState<string>('')
    const [users, setUsers] = useState<User[]>([])

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        setUsers([...users, {name: name, id: crypto.randomUUID()}])
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={name}></input>
                <Button label="button" onClick={() => console.log('clicked')} type='submit'/>
            </form>
            {users && users.map((user) => <UserCard key={user.id} name={user.name}/>)}
        </>
    )
}