import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('authToken');


  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return null;
};

export default Redirect;
