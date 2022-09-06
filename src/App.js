import './App.css';
import ProductPage from './components/pages/ProductPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import RecipesPage from './components/pages/RecipesPage';
import RecipeDetailsPage from './components/pages/RecipeDetailsPage';
import CreatePage from './components/pages/CreatePage';
import AdminPanelPage from './components/pages/AdminPanelPage';
import UserPanelPage from './components/pages/UserPanelPage';
import NotFoundPage from './components/pages/NotFoundPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import useLocalStorage from './utility/useLocalStorage';
import { useEffect } from 'react';
import axios from 'axios';
import WithNavBar from './components/navbar/WithNavBar';
import WithoutNavBar from './components/navbar/WithoutNavBar';
import ConditionalRoute from './utility/routeAccess/ConditionalRoute';
import MemberRoute from './utility/routeAccess/MemberRoute';
import UserRoute from './utility/routeAccess/UserRoute';
import AdminRoute from './utility/routeAccess/AdminRoute';

const getUserUrl = `${process.env.REACT_APP_BACKEND_URL}/user/get_current`;

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
          <Route path="/recipes" element={<RecipesPage userDetails={userDetails} jwt={jwt} setJwt={setJwt}/>} />
          <Route path="/create" element={<MemberRoute><CreatePage/></MemberRoute>} />
          <Route path="/user" element={<UserRoute><UserPanelPage/></UserRoute>} />
          <Route path="/admin" element={<AdminRoute><AdminPanelPage/></AdminRoute>} />  
        </Route>
        <Route element={<WithoutNavBar />}>
          <Route path="/login" element={<ConditionalRoute><LoginPage setJwt={setJwt} setUserDetails={setUserDetails}/></ConditionalRoute>} />  
          <Route path="/register" element={<ConditionalRoute><RegisterPage /></ConditionalRoute>} />
          <Route path="/recipe_details" element={<RecipeDetailsPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
