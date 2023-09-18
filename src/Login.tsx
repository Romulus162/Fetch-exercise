import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {


    return (
        <div className="px-4 py-5 my-5 text-center" style={{marginRight: '900px'}}>
        <h1 className="display-5 fw-bold text-body">Fetch Login</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">This is the default page for every user after clicking the site link, from here they must Authenticate via Login, else redirect towards Registration.</p>
        </div>
          <span className="tagcloud" style={{marginLeft: '900px', marginTop: '-500px'}}>
          </span>
      </div>
    )
}

export default Login;
