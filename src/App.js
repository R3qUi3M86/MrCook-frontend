import './App.css';
import NavigationBar from './components/navbar/NavigationBar';
import RecipesPage from './components/pages/RecipesPage';
import ProductPage from './components/pages/ProductPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element="<h1>404 page not found</h1>" />   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
