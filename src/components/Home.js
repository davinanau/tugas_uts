import React from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
        <div className='centered-content'>
      <h1>Website Pribadi</h1>
      <h1>Davina Nazwa</h1>
      <Link to="/profil">
          <button>Profil</button>
        </Link>
        </div>
    </div>
  );
}

export default Home;
