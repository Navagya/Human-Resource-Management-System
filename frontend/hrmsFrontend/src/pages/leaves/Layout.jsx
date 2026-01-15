import {Outlet} from "react-router-dom";

const Layout = ()=>{
    return (
        <div className="p-4">
          {/*submodule renders here*/}
          <Outlet/>
        </div>
    );

};

export default Layout;