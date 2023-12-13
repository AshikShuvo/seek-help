import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../layouts/App.Layout.tsx";
import ErrorPage from "../pages/Error.page.tsx";
import LoginPage from "../pages/Login.page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path: "login",
                element: <LoginPage/>,
            }
        ]
    },
]);

export default router;