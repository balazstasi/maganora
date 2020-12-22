import React from "react";

function Layout({ children }) {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{children}</main>
    </>
  );
}

export default Layout;
