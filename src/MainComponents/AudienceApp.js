import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import AddAudience from '../components/AudienceComponents/AddAudience';
import Navbar from '../components/AudienceComponents/Navbar';
import Login from '../components/AudienceComponents/Login';
import AudienceInfo from '../components/AudienceComponents/AudienceInfo';
import BookTicket from '../components/AudienceComponents/BookTicket';
// import UpdateAudience from './components/UpdateAudience';
// import DeleteAudience from './components/DeleteAudience';


function AudienceApp() {
  return (
    <div>

      <Navbar />
      <Outlet />

    </div>
  );
}

export default AudienceApp;
