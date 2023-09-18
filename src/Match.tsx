import React, { useEffect } from "react";

function Match() {

//Remember to add auth to get to this place via login/register

  return (
    <div className="px-4 py-5 my-5 text-center" style={{marginRight: '900px'}}>
      <h1 className="display-5 fw-bold text-body">Fetch Match</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">This should either be its own page, or maybe a pop up for later, but use companies API to showcase a singular dog that user would like according to selection(s)</p>
      </div>
        <span className="tagcloud" style={{marginLeft: '900px', marginTop: '-500px'}}>
        </span>
    </div>
  );
}


export default Match;
