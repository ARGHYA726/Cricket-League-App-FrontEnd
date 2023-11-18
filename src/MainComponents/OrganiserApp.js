import { Outlet } from 'react-router-dom';
import Navbar from '../components/OrganiserComponents/NavBar';




function OrganiserApp() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default OrganiserApp;
