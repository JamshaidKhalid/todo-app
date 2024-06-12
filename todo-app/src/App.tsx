import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<AuthPage formType='signin' />} />
      <Route path="/signup" element={<AuthPage formType='signup' />} />
    </Routes>
  )
}

export default App
