import {Outlet} from "react-router-dom";

const AppLayout=()=>{
    return (
        <div className="h-screen w-screen bg-gray-50">
            app layout
            <Outlet/>
        </div>
    )
}
export default AppLayout;