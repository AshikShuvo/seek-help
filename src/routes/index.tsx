import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../layouts/App.Layout.tsx";
import ErrorPage from "../pages/Error.page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement:<ErrorPage/>
    },
]);

export default router;