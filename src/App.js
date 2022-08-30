import './App.css';
import RecipesPage from './components/pages/RecipesPage';
import ProductPage from './components/pages/ProductPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import useLocalStorage from './utility/useLocalStorage';
import { useEffect } from 'react';
import axios from 'axios';
import WithNavBar from './components/navbar/WithNavBar';
import WithoutNavBar from './components/navbar/WithoutNavBar';
import ConditionalRoute from './utility/ConditionalRoute';

const getUserUrl = "http://localhost:5000/user/get_current";

function App() {
  const [jwt, setJwt] = useLocalStorage("", "jwt");
  const [userDetails, setUserDetails] = useLocalStorage({
    member: false,
    banned: false,
    productComment: false
  }, "userDetails");

  useEffect(() => {
    if(jwt){
      axios
        .get(getUserUrl, {headers:{
          'Authorization': `Bearer ${jwt}`
        }})
        .then((response) => {
            setUserDetails(response.data);
        })
        .catch((err) => {
          if (err.request.status === 401){
            setJwt("");
          }
        });
    }
  }, [jwt, setJwt, setUserDetails])

  return (
      <Router>
        <Routes>
          <Route element={<WithNavBar userDetails={userDetails} setJwt={setJwt} setUserDetails={setUserDetails}/>}>
            <Route path="/" element={<ProductPage userDetails={userDetails} setUserDetails={setUserDetails}/>} />
            <Route path="/recipes" element={<RecipesPage />} />
          </Route>
          <Route element={<WithoutNavBar />}>
            <Route path="/login" element={
              <ConditionalRoute>
                <LoginPage setJwt={setJwt} setUserDetails={setUserDetails}/>
              </ConditionalRoute>} />  
            <Route path="/signup" element={
              <ConditionalRoute>
                <SignupPage />
              </ConditionalRoute>} />
            <Route path="*" element={
              <div className="d-flex flex-column justify-content-center" style={{height: "100%", backgroundColor: "#651d32"}}>
                <h1 className='text-center text-light'>404 Page not found!</h1>
              </div>} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
