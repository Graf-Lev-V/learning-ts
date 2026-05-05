import UserCard from './components/UserCard'
import UserForm from './components/UserForm'
import PostList from './components/PostList'
import UserList from './components/UserList'
import { useState } from 'react'

export default function App() {

  const [body, setBody] = useState<string | null>(null)

  return (
    <>
      <UserCard name="Jhon" age={25} isOnline={true}></UserCard>
      <hr></hr>
      <UserCard name='Den'></UserCard>
      <hr/>
      <UserForm/>
      <hr/>
      <button onClick={() => setBody('Users')}>Users</button>
      <button onClick={() => setBody('Posts')}>Posts</button>
      {body === 'Posts' && <PostList/>}
      {body === 'Users' && <UserList/>}
    </>
  )
}