import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Link to='/users'>Users</Link>
            <Link to='/posts'>Posts</Link>
            <Outlet/>
        </>
    )
}