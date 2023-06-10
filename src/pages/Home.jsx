import React from 'react';
import Axios from 'axios';
import ServerLink from '../ServerLink';
import Header from '../components/Header';

const Home = () => {

  const test = async () => {
    Axios.get(`${ServerLink}/test`)
        .then(response => {
          console.log(response);
        })
  }

    return (
    <div className="pageBackground">
      <Header/>
      <div className="comingSoon">
        <h2>Coming Soon</h2>
      </div>
    </div>
    );
  };
  
  export default Home;