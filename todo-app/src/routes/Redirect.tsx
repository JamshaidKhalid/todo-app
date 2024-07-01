import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import TodosPage from '../pages/TodoPage';


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

  return (
    <>
    <Routes>
    <Route path="/dashboard" element={<TodosPage />} />
          <Route path="/" element={<AuthPage formType='signin' />} />
          <Route path="/signup" element={<AuthPage formType='signup' />} />
    </Routes>
    </>
  );
};

export default Redirect;
