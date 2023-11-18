import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import AddTeam from '../components/TeamComponent/AddTeam';
import DeleteTeam from '../components/TeamComponent/DeleteTeam';
import Navbar from '../components/TeamComponent/Navbar';
import TeamIdShow from '../components/TeamComponent/TeamIdShow';
import TeamPlayerShow from '../components/TeamComponent/TeamPlayerShow';
import TeamShow from '../components/TeamComponent/TeamShow';
import UpdateTeam from '../components/TeamComponent/UpdateTeam';

function TeamApp() {
  return (

    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default TeamApp;
