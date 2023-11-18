import { Outlet } from 'react-router-dom';
import Navbar from '../components/GroundComponents/Navbar';



function GroundApp() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default GroundApp;
