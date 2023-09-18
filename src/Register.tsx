import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {


    return (
        <div className="px-4 py-5 my-5 text-center" style={{marginRight: '900px'}}>
        <h1 className="display-5 fw-bold text-body">Fetch Registration</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">This is where a user goes to Register a new account.</p>
        </div>
          <span className="tagcloud" style={{marginLeft: '900px', marginTop: '-500px'}}>
          </span>
      </div>
    )
}

export default Register;
