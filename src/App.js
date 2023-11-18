import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAudience from './components/AudienceComponents/AddAudience';
import AudienceInfo from './components/AudienceComponents/AudienceInfo';
import BookTicket from './components/AudienceComponents/BookTicket';
import Login from './components/AudienceComponents/Login';
import ErrorPage from './components/Error/ErrorPage';
import AddGround from './components/GroundComponents/AddGround';
import DeleteGround from './components/GroundComponents/DeleteGround';
import GroundShow from './components/GroundComponents/GroundShow';
import UpdateGround from './components/GroundComponents/UpdateGround';
import Home from './components/Home/Home';
import AddMatch from './components/MatchComponents/AddMatch';
import CancelMatch from './components/MatchComponents/CancelMatch';
import MatchView from './components/MatchComponents/MatchView';
// organiser imports
import AddOrganiser from './components/OrganiserComponents/AddOrganiser';
import OrganiserIdShow from './components/OrganiserComponents/OrganiserIdShow';
import OrganiserShow from './components/OrganiserComponents/OrganiserShow';
import OrganiserShowPrize from './components/OrganiserComponents/OrganiserShowPrize';
import OrganiserTournamentShow from './components/OrganiserComponents/OrganiserTournamentShow';
import UpdateOrganiser from './components/OrganiserComponents/UpdateOrganiser';
import AddOwner from './components/OwnerComponent/AddOwner';
import DeleteOwner from './components/OwnerComponent/DeleteOwner';
import OwnerIdShow from './components/OwnerComponent/OwnerIdShow';
// owner
import OwnerShow from './components/OwnerComponent/OwnerShow';
import OwnerShowSalary from './components/OwnerComponent/OwnerShowSalary';
import UpdateOwner from './components/OwnerComponent/UpdateOwner';
import AddPlayer from './components/PlayerComponents/AddPlayer';
import GetPlayerById from './components/PlayerComponents/GetPlayerById';
import ShowPlayer from './components/PlayerComponents/ShowPlayer';
import UpdatePlayer from './components/PlayerComponents/UpdatePlayer';
import AddTeam from './components/TeamComponent/AddTeam';
import DeleteTeam from './components/TeamComponent/DeleteTeam';
import TeamIdShow from './components/TeamComponent/TeamIdShow';
import TeamPlayerShow from './components/TeamComponent/TeamPlayerShow';
import TeamShow from './components/TeamComponent/TeamShow';
import UpdateTeam from './components/TeamComponent/UpdateTeam';
import AddTicket from './components/TicketComponents/AddTicket';
import DeleteTicket from './components/TicketComponents/DeleteTicket';
import GetTicketById from './components/TicketComponents/GetTicketById';
import AddTournament from './components/TournamentComponents/AddTournament';
import TournamentIdShow from './components/TournamentComponents/TournamentIdShow';
import TournamentShow from './components/TournamentComponents/TournamentShow';
import UpdateTournament from './components/TournamentComponents/UpdateTournament';
import AudienceApp from './MainComponents/AudienceApp';
import GroundApp from './MainComponents/GroundApp';
import MatchApp from './MainComponents/MatchApp';
import OrganiserApp from './MainComponents/OrganiserApp';
import OwnerApp from './MainComponents/OwnerApp';
import PlayerApp from './MainComponents/PlayerApp';
import TeamApp from './MainComponents/TeamApp';
import TicketApp from './MainComponents/TicketApp';
import TournamentApp from './MainComponents/TournamentApp';
import MainNavbar from './MainNavbar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path='/' element={<Home />} />


          {/* organiser routes */}
          <Route exact path="/organisers" element={<OrganiserApp />} >
            <Route index element={<OrganiserShow />} />
            <Route exact path="add" element={<AddOrganiser />} />
            <Route exact path="byId" element={<OrganiserIdShow />} />
            <Route exact path="update/:orgid" element={<UpdateOrganiser />} />
            <Route exact path="tournaments/:orgid" element={<OrganiserTournamentShow />} />
            <Route exact path="prizemoney/:orgid" element={<OrganiserShowPrize />} />
          </Route>

          {/* Owner routes */}
          <Route exact path="/owner" element={<OwnerApp />} >
            <Route index element={<OwnerShow />} />
            <Route exact path="/owner/getAllOwners" element={<OwnerShow />} />
            <Route exact path="addOwner" element={<AddOwner />} />
            <Route exact path="byId" element={<OwnerIdShow />} />
            <Route exact path="updateOwner/:oid" element={<UpdateOwner />} />
            <Route exact path="paysalary/:oid" element={<OwnerShowSalary />} />
            <Route exact path="deleteById/:oid" element={<DeleteOwner />} />
          </Route>

          {/* Player */}
          <Route exact path="/players" element={<PlayerApp />}>
            <Route index element={<ShowPlayer />} />
            <Route path='show-players' element={<ShowPlayer />} />
            <Route exact path='getplayerbyid' element={<GetPlayerById />} />
            <Route exact path='addplayer' element={<AddPlayer />} />
            <Route exact path='update-player/:pid' element={<UpdatePlayer />} />
          </Route>

          {/* ticket */}
          <Route exact path='/tickets' element={<TicketApp />}>
            <Route index element={<GetTicketById />} />
            <Route exact path='addticket' element={<AddTicket />} />
            <Route exact path='deleteticket' element={<DeleteTicket />} />
            <Route exact path='getticketbyid' element={<GetTicketById />} />
          </Route>

          {/* ground */}


          <Route exact path="/grounds" element={<GroundApp />} >
            <Route index element={<GroundShow />} />
            <Route exact path="update/:gid" element={<UpdateGround />} />
            <Route exact path="delete/:gid" element={<DeleteGround />} />
            <Route exact path="add" element={<AddGround />} />
          </Route>

          {/* Match */}
          <Route exact path="/matches" element={<MatchApp />}>
            <Route index element={<MatchView />} />
            <Route exact path=":mid/cancel" element={<CancelMatch />} />
            <Route exact path='add' element={<AddMatch />} />
          </Route>

          {/* Teams */}
          <Route exact path="/teams" element={<TeamApp />}>
            <Route index element={<TeamShow />} />
            <Route exact path="add" element={<AddTeam />} />
            <Route exact path="byId" element={<TeamIdShow />} />
            <Route exact path="/teams/players/:tid" element={<TeamPlayerShow />} />
            <Route exact path="update/:tid" element={<UpdateTeam />} />
            <Route exact path="delete/:tid" element={<DeleteTeam />} />
          </Route>

          {/* audience */}
          <Route exact path="/audience" element={<AudienceApp />}>
            <Route index element={<Login />} />
            <Route exact path="" element={<Login />} />
            <Route exact path="add" element={<AddAudience />} />
            <Route exact path=":aid" element={<AudienceInfo />} />
            <Route exact path=":aid/book-ticket" element={<BookTicket />} />
          </Route>

          {/* Tournament */}
          <Route exact path="/tournament" element={<TournamentApp />}>
            <Route index element={<TournamentShow />} />
            <Route exact path="" element={<TournamentShow />} />
            <Route exact path="add" element={<AddTournament />} />
            <Route exact path="byId" element={<TournamentIdShow />} />
            <Route exact path="update/:tid" element={<UpdateTournament />} />
          </Route>

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
