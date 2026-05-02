import UserCard from '../components/UserCard'
import UserForm from '../components/UserForm'

export default function App() {
  return (
    <>
      <UserCard name="Jhon" age={25} isOnline={true}></UserCard>
      <hr></hr>
      <UserCard name='Den'></UserCard>
      <hr/>
      <UserForm/>
    </>
  )
}