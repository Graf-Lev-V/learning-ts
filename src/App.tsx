import PostList from './components/PostList'
import UserList from './components/UserList'
import { Routes, Route, Navigate } from 'react-router-dom'
import PostDetail from './components/PostDetail'
import NotFound from './components/NotFound'
import Layout from './components/Layout'

export default function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/users' element={<UserList/>}></Route>
        <Route path='/posts' element={<PostList/>}></Route>
        <Route path='/posts/:id' element={<PostDetail/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/' element={<Navigate to={'/users'}/>}/>
      </Route>
    </Routes>
  )
}