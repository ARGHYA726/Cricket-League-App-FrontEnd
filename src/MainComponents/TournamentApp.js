import { Outlet } from 'react-router-dom';
import Navbar from '../components/TournamentComponents/NavBar';
function TournamentApp() {
  return (
      <>
        <Navbar />
        <Outlet />
      </>
  );
}

export default TournamentApp;
