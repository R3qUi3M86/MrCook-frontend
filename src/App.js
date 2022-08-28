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
      console.log("fetching user data...")
      axios
        .get(getUserUrl, {headers:{
          'Authorization': `Bearer ${jwt}`
        }})
        .then((response) => {
            setUserDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
          setJwt("");
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
            <Route path="/login" element={<LoginPage setJwt={setJwt} setUserDetails={setUserDetails}/>} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element="<h1>404 page not found</h1>" />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
