import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
  const setIsAuthenticated = (value) => {
    // Implement your authentication logic here
    console.log('Authentication status:', value);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;