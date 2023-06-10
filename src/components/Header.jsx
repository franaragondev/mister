import React from 'react';
import userIcon from '../assets/userIcon.png';
import teamIcon from '../assets/teamIcon.png';

const Header = () => {

  const redirect = (url) => {
    window.location.href = `/${url}`;
  }

    return (
      <div className="pageTitle">
      <img src={teamIcon} alt="" />
        <div>
            <h1 onClick={() => redirect('')}> THE MISTER LEAGUE</h1>
            <p>La mejor liga del mundo</p>
        </div>
        <img onClick={() => redirect('login')} id='userIcon' src={userIcon} alt="" />
       </div>
       );
  };
  
  export default Header;