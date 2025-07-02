// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/create">New Post</Link>
    </nav>
  );
}

export default Header;