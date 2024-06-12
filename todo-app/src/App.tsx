import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import './App.css';
import TodosPage from './pages/TodoPage';

function App() {

  const isLoggedIn = localStorage.getItem('authToken') !== null && localStorage.getItem('email') !== null;
  const navigate = useNavigate();

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/dashboard" element={<TodosPage />} />
      ) : (
        <>
          <Route path="/" element={<AuthPage formType='signin' />} />
          <Route path="/signup" element={<AuthPage formType='signup' />} />
        </>
      )}
      {/* <Route path="*" element={navigate()} /> */}
    </Routes>
  )
}

export default App
