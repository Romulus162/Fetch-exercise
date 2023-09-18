import React, { useEffect } from "react";

function MainPage() {

//Remember to add auth to get to this place via login/register

  return (
    <div className="px-4 py-5 my-5 text-center" style={{marginRight: '900px'}}>
      <h1 className="display-5 fw-bold text-body">Fetch Home-Page</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">This is where an authenticated user goes to have access to the rest of the site, and be able to do as instructions declare.</p>
      </div>
        <span className="tagcloud" style={{marginLeft: '900px', marginTop: '-500px'}}>
        </span>
    </div>
  );
}


export default MainPage;
