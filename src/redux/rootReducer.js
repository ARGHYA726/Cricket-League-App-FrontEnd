import { combineReducers } from "redux";
import { AudienceReducer } from "./reducer/AudienceReducer";
import { GroundReducer } from "./reducer/GroundReducer";
import { MatchReducer } from "./reducer/MatchReducer";
import { organiserReducer } from './reducer/OrganiserReducer';
import { OwnerReducer } from "./reducer/OwnerReducer";
import PlayerReducer from "./reducer/PlayerReducer";
import { TeamsReducer } from "./reducer/TeamReducer";
import TicketReducer from "./reducer/TicketReducer";
import { TournamentReducer } from "./reducer/TournamentReducer";

const rootReducer = combineReducers({
    organiser: organiserReducer,
    grounds: GroundReducer,
    match: MatchReducer,
    players: PlayerReducer,
    owners: OwnerReducer,
    tickets: TicketReducer,
    teams: TeamsReducer,
    tournament: TournamentReducer,
    audience: AudienceReducer
});

export default rootReducer;