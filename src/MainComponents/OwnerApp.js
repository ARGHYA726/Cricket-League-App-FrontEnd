import { Outlet } from 'react-router-dom';
import Navbar from '../components/OwnerComponent/Navbar';
function OwnerApp() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default OwnerApp;
