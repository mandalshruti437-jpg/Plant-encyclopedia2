import { Outlet } from "react-router-dom";
import AdminNavbar from '../Common/AdminNavbar';
import AdminFooter  from "./AdminFooter"; 

function AdminLayout() {
  return (
    <>
      <AdminNavbar />

      <main className="container-fluid">
        <Outlet />
      </main>

      <AdminFooter/>
      
    </>
  );
}

export default AdminLayout;