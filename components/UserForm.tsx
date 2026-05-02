import { useState } from "react"
import UserCard from "./UserCard"
import Button from './Button'

type User = {
    name: string,
    age?: number
}

export default function UserForm() {

    const [name, setName] = useState<string>('')
    const [user, setUser] = useState<User | null>(null)

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        setUser({name: name})
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
            {user && <UserCard name={user.name}/>}
        </>
    )
}