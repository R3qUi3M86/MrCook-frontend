import React from 'react';
import { Outlet } from 'react-router';
import NavigationBar from './NavigationBar';

const WithNavBar = ({userDetails, setJwt, setUserDetails}) => {
  return (
    <>
      <NavigationBar userDetails={userDetails} setJwt={setJwt} setUserDetails={setUserDetails}/>
      <Outlet />
    </>
  );
};

export default WithNavBar