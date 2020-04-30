import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';


const Header = () => {
  return(
    <div className="ui secondary pointing menu" style={{padding:'1%'}}>
      <Link to='/' className="item">StreamIt</Link>

     <div className="menu right">
        <Link to='/' className="item">streams</Link>
        <Link to='/stream/new' className="item">Create streams</Link>
        <GoogleAuth/>
      </div>

    </div>
  );
};


export default Header;
