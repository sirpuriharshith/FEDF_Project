import { NavLink, Link, useNavigate } from 'react-router-dom';
import { navItems } from '../services/data';
import { useAuth } from '../context/AuthContext';

function Initials({ user }) {
  if (user?.photoURL) return <img className="avatar-img" src={user.photoURL} alt={user.displayName || 'profile'} />;
  const letter = (user?.displayName || user?.email || 'G').charAt(0).toUpperCase();
  return <span>{letter}</span>;
}

export default function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return <header className="nav">
    <Link className="brand" to="/"><span className="brand-icon">♥</span><span>MediAssist</span></Link>
    <nav className="nav-links" aria-label="Primary navigation">
      {navItems.map(([to,label,icon]) => <NavLink key={to} to={to} className={({isActive}) => isActive ? 'active' : ''}><span>{icon}</span>{label}</NavLink>)}
    </nav>
    <div className="nav-actions">
      <button className="danger" onClick={() => navigate('/emergency')}>+ Emergency</button>
      {user ? <div className="profile-menu">
        <button className="avatar" onClick={() => navigate('/profile')} title={user.email}><Initials user={user}/></button>
        <button className="ghost small" onClick={signOut}>Logout</button>
      </div> : <button className="primary small" onClick={() => navigate('/login')}>Sign in</button>}
    </div>
  </header>;
}
