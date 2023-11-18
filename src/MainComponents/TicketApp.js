import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/TicketComponents/NavBar';


function TicketApp() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default TicketApp;
