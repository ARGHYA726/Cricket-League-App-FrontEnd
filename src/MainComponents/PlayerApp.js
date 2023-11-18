import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/PlayerComponents/NavBar';

function PlayerApp() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default PlayerApp;
