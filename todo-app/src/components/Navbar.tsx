// Navbar.tsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [email, setEmail] = useState<string | null>(localStorage.getItem('email'));
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('email');
    setEmail(null)
    
    navigate('/');
  }


  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>{email}</div>
      <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
