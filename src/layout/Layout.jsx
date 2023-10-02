import { Outlet } from "react-router-dom";
export const Layout = () => {

    return (
        <div>
            <h1>STAR WARS</h1>
            <Outlet />
        </div>
    )
}