import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Records from './pages/Records/Records';
import Analysis from './pages/Analysis/Analysis';
import Assistant from './pages/Analysis/Assistant';
import Doctors from './pages/Doctors/Doctors';
import Hospitals from './pages/Hospitals/Hospitals';
import Booking from './pages/Booking/Booking';
import Costs from './pages/Costs/Costs';
import Recovery from './pages/Recovery/Recovery';
import Awareness from './pages/Awareness/Awareness';
import Emergency from './pages/Emergency/Emergency';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import { useAuth } from './context/AuthContext';

function Protected({ children }) { const { isAuthed } = useAuth(); return isAuthed ? children : <Navigate to="/login" replace />; }

export default function App() {
  return <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/records" element={<Protected><Records/></Protected>}/>
    <Route path="/analysis" element={<Analysis/>}/>
    <Route path="/assistant" element={<Assistant/>}/>
    <Route path="/doctors" element={<Doctors/>}/>
    <Route path="/hospitals" element={<Hospitals/>}/>
    <Route path="/booking" element={<Protected><Booking/></Protected>}/>
    <Route path="/costs" element={<Costs/>}/>
    <Route path="/recovery" element={<Protected><Recovery/></Protected>}/>
    <Route path="/awareness" element={<Awareness/>}/>
    <Route path="/emergency" element={<Emergency/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/profile" element={<Protected><Profile/></Protected>}/>
    <Route path="*" element={<Navigate to="/"/>}/>
  </Routes>;
}
