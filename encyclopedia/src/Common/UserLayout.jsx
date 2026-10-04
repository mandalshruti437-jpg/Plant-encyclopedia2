import { Outlet } from "react-router-dom";
import UserNavbar from "../Common/UserNavbar";
import Footer from "../Components/Footer";

function UserLayout() {

  return (
    <>
      <UserNavbar />

      <Outlet />

      <Footer />
    </>
  );
}

export default UserLayout;