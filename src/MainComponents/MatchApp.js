import { Outlet } from 'react-router-dom';
import Navbar from '../components/MatchComponents/Navbar';



function MatchApp() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default MatchApp;
