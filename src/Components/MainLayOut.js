import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function MainLayout({ children }) {
  return (
    <div className="flex  h-full">
      <div className="sticky top-0 h-full">
        <SideBar className="h-full" />
      </div>

      <div className="flex-col w-full h-full overflow-hidden">
        <Header />
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
}


export default MainLayout;
