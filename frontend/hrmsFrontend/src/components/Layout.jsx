import React from 'react'
import Sidebar from './Sidebar';

function Layout({children}) {
  return (
    <div className="flex bg-zinc-900 min-h-screen">
        <Sidebar/>
        <div className="flex-1 p-6 text-white">
            {children}
        </div>
    </div>
  );
}

export default Layout;