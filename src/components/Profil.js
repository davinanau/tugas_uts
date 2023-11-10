import React from 'react';
import profileImage from '../assets/images/photo/photo.jpg';

import '../style/Profil.css'

function Profil() {
  return (
    <div className="profil">
      <h2>Profil</h2>
      <img src={profileImage} alt="Profil Davina Nazwa" />
      <h3>Tentang Saya</h3>
      <p>
        Nama : Davina Nazwa Aulia<br></br>
        Tempat, Tanggal Lahir : Kuningan, 03 Mei 2004<br></br>
        SD  : SDN 1 Kadugede<br></br>
        SMP : SMPN 1 Kuningan<br></br>
        SMA : SMAN 2 Kuningan<br></br>
        S1 : Universitas Pendidikan Indonesia<br></br>
      </p>
    </div>
  );
}

export default Profil;
